/**
 * Created by apple on 2018/6/10.
 */
import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {observer} from 'mobx-react'
const {width} = Dimensions.get('window');
import {withNavigation} from 'react-navigation';

@withNavigation
@observer
export default class MenuList extends Component{

  jump(){
    console.log(this.props);
    this.props.navigation.navigate('MenuDetail',{a:111})
  }

  render(){
    return(
      <View style={styles.mycontainer}>
        <View>
          <Image style = {styles.myImg} source={require('../assets/0538.png')}/>
        </View>
        <TouchableOpacity style={styles.right} onPress={this.jump.bind(this)}>
          <View style={styles.title}>
            <Text style={styles.header}>文本标题</Text>
          </View>
          <View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.details}>
              文字介绍1文字介绍2文字介绍3文字介绍4文字介绍5文字介绍6文字介绍7文字介绍8文字介绍
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mycontainer:{
    display:'flex',
    justifyContent:'flex-start',
    width:width*0.95,
    alignSelf:'center',
    height:80,
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#f2f2f2',
    flexDirection:'row',
    paddingBottom:8,
    margin:4
  },
  right:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:width - 80,
    paddingLeft:8,
    paddingRight:8
  },
  myImg:{
    width:80,
    height:'100%'
  },
  header:{
    fontSize:18,
    fontWeight:'900',
  },
  details:{
    fontSize:12,
    color:'#404040',
    lineHeight:14,
    marginTop:6,

  },
})