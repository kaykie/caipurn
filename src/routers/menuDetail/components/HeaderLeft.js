import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import IconE from 'react-native-vector-icons/Entypo'

const HeaderLeft = ({navigation}) => {
  const onPress = () => {
    navigation.goBack()
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <IconE name='chevron-small-left' size={25} color='#000'>
          <Text style={styles.back}>内容</Text>
        </IconE>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    marginBottom:10
  },
  back:{
    fontSize:14,
    lineHeight:25
  }
});

export default HeaderLeft