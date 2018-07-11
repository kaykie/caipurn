/**
 * Created by apple on 2018/6/10.
 */
import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {observer} from 'mobx-react'

@observer
export default class Title extends Component{

  render(){
    return(
      <View style={styles.title}>
        <View style={styles.detail}>
          <Text>今日午餐推荐</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    paddingLeft:8,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderColor: '#f2f2f2',
    paddingBottom:4,
    marginBottom:8
  },
  detail:{
    borderLeftWidth:2,
    borderColor:'#22ff22',
    paddingLeft:8,
    paddingTop:8,
    paddingBottom:8
  },
});