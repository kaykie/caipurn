/**
 * Created by apple on 2018/6/7.
 */
import React,{Component} from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import {observer} from 'mobx-react'


@observer
export default class MyTextInput extends Component{



  render(){
    return(
      <View style = {styles.container}>
        <TextInput
          {...this.props}
          placeholder={'请输入搜索内容'}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{

  }
});