import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileDetail } from '../screens'
import NavigationPath from '../constants/NavigationPath'
const Stack = createNativeStackNavigator()
const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.PROFILEDETAIL} screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationPath.PROFILEDETAIL} component={ProfileDetail} />
    </Stack.Navigator>
  )
}

export default ProfileNavigation