import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {inject} from 'mobx-react'
import {withNavigation} from 'react-navigation'
import data from '../../../data'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyTextInput from '../../../components/MyTextInput'
import { InputItem } from 'antd-mobile';
import Search from 'react-native-search-box'
import MenuList from '../../../components/menuList'
import Title from '../../../components/Title'
const {width} = Dimensions.get('window');

@withNavigation
@inject('GStore')
export default class Paragraph extends Component <{}> {
  state={
    labelnum1:'23'
  };

  pressImage = (item) => {
    // const {music, album, url, singer} = item
    // const musicMessage = {music, album, url, singer}
    // this.props.GStore.changeList(item)
    // this.props.GStore.changeMusic(musicMessage)
    // this.props.navigation.navigate('Music')
  };
  search(){
    console.log(333)
  }

  render() {
    return (
      <View style={styles.container}>
        <Search
          placeholder="请输入需要搜索的菜单"
          onSearch={this.search.bind(this)}
          backgroundColor="#fff"
          cancelButtonTextStyle={{color:'#174a0d'}}
          cancelTitle='搜索'
          onCancel={this.search.bind(this)}
        />
        <Title />
        <MenuList />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },


  content: {
    width: width * 0.75,
    alignSelf: 'center',
    marginBottom: 50
  },
  text: {
    color: 'black',
    opacity: .8
  },
  author: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'center',
    marginBottom: 30
  }
});
