import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenNavigation from './AuthenNavigation'
import MainTab from './MainTab'
import NavigationPath from '../constants/NavigationPath'
import DiaryNavigation from './DiaryNavigation'
import ProfileNavigation from './ProfileNavigation'

const Stack = createNativeStackNavigator()
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.MAINTAB} screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationPath.MAINTAB} component={MainTab} />
        <Stack.Screen name={NavigationPath.AUTHENNAVIGATION} component={AuthenNavigation} />
        <Stack.Screen name={NavigationPath.DIARYNAVIGATION} component={DiaryNavigation} />
        <Stack.Screen name={NavigationPath.PROFILENAVIGATION} component={ProfileNavigation} />
    </Stack.Navigator>
  )
}

export default MainNavigation