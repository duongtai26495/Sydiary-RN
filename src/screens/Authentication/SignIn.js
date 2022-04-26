import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import Colors from '../../assets/color/Colors'
import authen_style from '../Authentication/authen_style'
import Image_path from '../../constants/Image_path'
import Icon_path from '../../constants/Icon_path'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={[authen_style.container, authen_style.container_authen]}>
      <StatusBar />
      <View style={[authen_style.view_authen]}>
        <Image source={Icon_path.LOGO} style={authen_style.logo} />
      </View>
        
    </SafeAreaView>
  )
}

export default SignIn