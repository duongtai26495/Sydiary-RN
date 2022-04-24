import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage_constants from '../../constants/Storage_constants';
import {CheckTokenIsExist} from '../../core/api/functions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
const Home = ({navigation, route}) => {

  useEffect(()=>{
    checkUserLogin()
  },[])

  const  checkUserLogin = async() =>{
    if(!await CheckTokenIsExist()){
      navigation.dispatch(StackActions.replace(NavigationPath.AUTHENNAVIGATION))
    }
  }

  return (
    <SafeAreaView>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default Home