import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenNavigation from './AuthenNavigation'
import MainTab from './MainTab'
import NavigationPath from '../constants/NavigationPath'

const Stack = createNativeStackNavigator()
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.MAINTAB} screenOptions={{headerShown:false}}r>
        <Stack.Screen name={NavigationPath.MAINTAB} component={MainTab} />
        <Stack.Screen name={NavigationPath.AUTHENNAVIGATION} component={AuthenNavigation} />
    </Stack.Navigator>
  )
}

export default MainNavigation