import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import {observer, inject} from 'mobx-react'
import NoListen from '../components/NoListen'
import List from '../components/List'
const {width,height} = Dimensions.get('window')
const all = require('../../../assets/all.png')
const all_active = require('../../../assets/all_active.png')
import Collapsible from '../components/Collapsible';


@inject('GStore')
@observer
export default class All extends Component<{}> {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerTitle: '菜谱分类',
    headerStyle: {
      backgroundColor: screenProps.themeColor,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      borderColor: '#f2f2f2',
      elevation: 0
    },
    headerTitleStyle: {
      fontSize: 20,
      color: 'black'
    },
    gesturesEnabled: true,
    tabBarVisible: true,
    tabBarIcon: (({tintColor, focused}) => {
      return (
        <Image
          source={!focused ? all : all_active}
          style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
        />
      )
    }),
    tabBarLabel: '菜谱分类',
  });
  scrollView(e){
    console.log(e)
  }
  render() {
    const {list} = this.props.GStore;
    return (
      <View>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={200}
          onScroll={this.scrollView.bind(this)}
        >
          <Collapsible/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:height-40,
    backgroundColor:'#fff'
  }
});
