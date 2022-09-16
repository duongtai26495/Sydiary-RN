import { Easing ,View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import Colors from '../../assets/color/Colors'
import Image_path from '../../constants/Image_path'
import Icon_path from '../../constants/Icon_path'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
import FallingLogo from '../../components/FallingLogo'
import style from '../../assets/styles/app_style'
const Authen = ({navigation}) => {

  
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.PRIMARY} />
        <Animated.View style={[{}]}>
         <FallingLogo />
          <TouchableOpacity style={[{marginTop:'10%'}]} onPress={()=>navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN))} >
            <Image source={Icon_path.RIGHT_ARROW} style={{ width: 70, height: 70, alignSelf: 'center' }} />
          </TouchableOpacity>
        </Animated.View>
    </SafeAreaView>
  )
}

export default Authen