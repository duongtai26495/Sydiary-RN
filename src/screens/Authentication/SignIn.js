import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Colors from '../../assets/color/Colors'
import Image_path from '../../constants/Image_path'
import Icon_path from '../../constants/Icon_path'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
import FallingLogo from '../../components/FallingLogo'
import String_constants from '../../constants/String_constants'
import { CheckTokenIsExist, LoginWithUsernamePassword } from '../../core/api/functions'
import style from '../../assets/styles/app_style'
const SignIn = ({ navigation }) => {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const passwordRef = useRef();


  const login = async () => {
    let User = {
      'username': username,
      'password': password
    }

    await LoginWithUsernamePassword(User);
    if (await CheckTokenIsExist("Login")) {
      navigation.dispatch(StackActions.replace(NavigationPath.MAINTAB))
    }
  }

  const signup = () => {
    navigation.navigate(NavigationPath.SIGNUP)
  }

  return (
    <SafeAreaView style={[style.container]}>
      <StatusBar
        backgroundColor={Colors.PRIMARY}
        barStyle='dark-content' />
      <ScrollView style={[{ flex: 1 }]}>
        <View style={[style.container]}>
          <FallingLogo />
          <View style={[style.form_container]}>
            <Text style={[style.auth_heading]}>{String_constants.WLCBACK.toUpperCase()}</Text>
            <View style={[style.form_group]}>
              <Image style={[style.icon_input]} source={Icon_path.USERNAME} />
              <TextInput
                returnKeyType='next'
                autoCapitalize='none'
                onChangeText={(value) => { setUsername(value) }}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder={String_constants.USERNAME_AUTH}
                placeholderTextColor={Colors.SMOKE}
                style={style.auth_input}
              />
            </View>
            <View style={[style.form_group]}>
              <Image style={[style.icon_input]} source={Icon_path.PASSWORD} />
              <TextInput
                autoCapitalize='none'
                onChangeText={(value) => { setPassword(value) }}
                ref={passwordRef}
                secureTextEntry={true}
                returnKeyType='done'
                placeholder={String_constants.PASSWORD_AUTH}
                placeholderTextColor={Colors.SMOKE}
                style={style.auth_input}
              />
            </View>
            <TouchableOpacity
              onPress={() => login()}
              style={[style.auth_btn, { backgroundColor: Colors.PRIMARY, justifyContent: 'center', }]}>
              <Text style={[style.labelBtn]}>{String_constants.SIGNIN_YOUR_ACCOUNT.toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => signup()}
              style={[style.auth_link, { color: Colors.BLACK, justifyContent: 'center', }]}>
              <Text style={[style.labelBtnBlack]}>{String_constants.SIGNUP.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn