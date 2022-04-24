import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import HomeNavigation from './HomeNavigation'
import AuthenNavigation from './AuthenNavigation'
import { NewDiary } from '../screens'
import MainTab from './MainTab'
import NavigationPath from '../constants/NavigationPath'

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.MAINTAB} screenOptions={{headerShown:false}}r>
        <Stack.Screen name={NavigationPath.MAINTAB} component={MainTab} />
        <Stack.Screen name={NavigationPath.AUTHENNAVIGATION} component={AuthenNavigation} />
    </Stack.Navigator>
  )
}

export default MainNavigation