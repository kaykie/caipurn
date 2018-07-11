import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import {inject, Provider, observer} from 'mobx-react'
import {List} from 'antd-mobile'
import Store from '../store'
import HeaderLeft from '../components/HeaderLeft'
import Album from '../components/Album'
import Player from '../components/Player'
import VideoComponent from '../components/VideoComponent'
const Item = List.Item;
@inject('GStore')
@observer
export default class MenuDetail extends Component {
  constructor() {
    super();
    this.store = new Store
  }
  static navigationOptions = ({navigation, screenProps}) => ({
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
      elevation: 0
    },
    headerLeft: (
      <HeaderLeft navigation={navigation}/>
    ),
  });
  componentDidMount(){
    console.log(this.props)
    // {/*<Provider store={this.store}>*/}
    // {/*<View style={styles.container}>*/}
    // {/*<Album  />*/}
    // {/*<Player />*/}
    // {/*<VideoComponent />*/}
    // {/*</View>*/}
    // {/*</Provider>*/}
  }
  renderTitle(title){
    return(
      <View style={styles.headerView}>
        <Text style={styles.headerText}>一 {title} 一</Text>
      </View>
    )
  }
  // 渲染名字与 标签
  renderIntroTitle(title,detail){
    return(
      <View>
        <View>
          <Text style={styles.headerName}>{title}</Text>
        </View>
        <View>
          <Text style={styles.headerIntro}>
            {detail}
          </Text>
        </View>
      </View>
    )
  }
  renderDetailHeader(){
    return(
      <View>
        <Text>fff</Text>
      </View>
    )
  }
  render() {
    return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <Image
        source={require('../../../assets/all.png')}
        style={styles.img}
      />
      {this.renderTitle('菜谱介绍')}
      {this.renderIntroTitle('菜谱名字','菜谱介绍详细菜谱介绍详细菜谱介绍详细菜谱介绍详细菜谱介绍详细菜谱介绍详细菜谱介绍详细菜谱介绍详细')}
      {this.renderIntroTitle('菜谱标签','菜谱标签菜谱标签菜谱标签菜谱标签菜谱标签')}

      <List renderHeader={this.renderTitle('食材明细')}>
        <Item
          extra={
            <Text>33</Text>
          }
        >
          extra为Image
        </Item>
        <Item
          extra={
            <Text>33</Text>
          }
        >
          extra为Image
        </Item>
        <Item
          extra={
            <Text>33</Text>
          }
        >
          extra为Image
        </Item>
        <Item
          extra={
            <Text>33</Text>
          }
        >
          extra为Image
        </Item>
      </List>
      {this.renderTitle('制作步骤')}
      <View>
        <Text style={styles.step}>
          1.fsdf
        </Text>
        <Image source={require('../../../assets/all.png')}
          style={styles.img}
        />
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  img:{
    width:250,
    height:150,
    alignSelf:'center'
  },
  headerView:{
    paddingTop:5,
    paddingBottom:5,
    marginTop:10
  },
  headerText:{
    textAlign:'center',
    fontSize:20
  },
  headerName:{
    margin:10,
    marginBottom:0,
    fontSize:16
  },
  headerIntro:{
    color:'#919191',
    margin:15
  },
  step:{
    fontSize:15,
    margin:6
  }
});