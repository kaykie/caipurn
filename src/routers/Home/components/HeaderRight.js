import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert
} from 'react-native'
import {observer, inject} from 'mobx-react'
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import IconE from 'react-native-vector-icons/dist/Entypo'
import SmallLoader from '../../../components/Loader'
import Get from '../../../service/Get'

@inject('GStore')
@observer
export default class HeaderRight extends Component <{}> {
  getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        resolve(position.coords)
      }, (error) => {
        let errorMessage = '失败：' + JSON.stringify(error.message)
        reject(errorMessage)
      }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      })
    })
  }

  componentDidMount() {
    const {right} = this.props.GStore;
    if (right.city == '') {
      this.getLocation().then((coords) => {
        const {longitude, latitude} = coords;
        let url = 'http://restapi.amap.com/v3/geocode/regeo?';
        let options = {
          key: '94440bc24bd838eb830d97ac83b680a8',
          location: 120.153576 + ',' + 30.287459
        };
        Get(url, options, (responseBody) => {
          console.log(responseBody);
          if (responseBody.status == 1) {
            const {adcode, city, district} = responseBody.regeocode.addressComponent
            let url = 'http://restapi.amap.com/v3/weather/weatherInfo?';
            let options = {
              key: '94440bc24bd838eb830d97ac83b680a8',
              city: adcode,
              extensions: 'base',
              output: 'JSON'
            };
            Get(url, options, (res) => {
              if (res.status == 1) {
                const {weather, temperature} = res.lives[0];
                let tran = {
                  city,
                  district,
                  weather,
                  temperature
                };
                this.props.GStore.changeRight(tran)
              }
            })
          }
        })
      }).catch((errorMessage) => {
        Alert.alert('获取ip失败', errorMessage)
      })
    }

  }

  render() {
    const {city, weather, temperature} = this.props.GStore.right
    const {showLoader} = this.props.GStore
    return (
      <View style={styles.container}>
        {showLoader ?
          <SmallLoader size={13} color='gray'/>
          :
          <View style={styles.textContainer}>
            <Text style={[styles.base]}>{city}</Text>
            <IconE name='dot-single' color='gray'/>
            <Text style={[styles.base]}>{weather}</Text>
            <Text style={[styles.base, styles.temperature]}>{temperature}</Text>
            <IconM name='temperature-celsius' size={12} style={styles.icon} color='gray'/>
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 6,
    marginTop: Platform.OS == "android" ? 20 : 12
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  base: {
    fontSize: 11,
    color: 'gray',
    fontFamily: 'Euphemia UCAS'
  },
  temperature: {
    marginLeft: 5,
  },
  icon: {
    fontWeight: '100'
  }
})
