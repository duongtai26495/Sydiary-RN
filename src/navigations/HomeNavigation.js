import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens'
import NavigationPath from '../constants/NavigationPath'
const Stack = createNativeStackNavigator()
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.HOMEPAGE} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NavigationPath.HOMEPAGE} component={Home} options={{animation:'slide_from_left'}} />
    </Stack.Navigator>
  )
}

export default HomeNavigation