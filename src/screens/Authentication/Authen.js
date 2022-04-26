import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import Colors from '../../assets/color/Colors'
import authen_style from '../Authentication/authen_style'
import Image_path from '../../constants/Image_path'
import Icon_path from '../../constants/Icon_path'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
const Authen = ({navigation}) => {
  return (
    <SafeAreaView style={authen_style.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <Image blurRadius={10}
        style={authen_style.background}
        source={Image_path.BACKGROUND[2]} />
      <ScrollView contentContainerStyle={{flex:1}}>
        <Animated.View style={[authen_style.authen_form,]}>
          <Image source={Icon_path.LOGO} style={authen_style.logo} />
          <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN))} >
            <Image source={Icon_path.RIGHT_ARROW} style={{ width: 70, height: 70, alignSelf: 'center' }} />
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Authen