/**
 * Created by apple on 2018/6/11.
 */
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Col, Row, Grid } from "react-native-easy-grid";

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...'
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...'
  }
];

export default class AccordionView extends Component {
  _renderSectionTitle(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Grid>
          <Col style={styles.col}>
            <Text style={styles.colText}></Text>
          </Col>
          <Col>
            <Text>1</Text>
          </Col>
          <Col>
            <Text>1</Text>
          </Col>
          <Col>
            <Text>1</Text>
          </Col>
          <Col>
            <Text>1</Text>
          </Col>
        </Grid>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)'
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  activeSelector: {
    fontWeight: 'bold'
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10
  },
  col:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'grey',
    height:'100%',
    flexDirection:'row',
    justifyContent:'center',
  },
  colText:{
    height:40,
    lineHeight:40
  }
});