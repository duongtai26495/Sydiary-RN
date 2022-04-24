import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home,NewDiary } from '../screens'
import NavigationPath from '../constants/NavigationPath'
const Stack = createNativeStackNavigator()
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.HOMEPAGE} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NavigationPath.HOMEPAGE} component={Home} options={{animation:'slide_from_left'}} />
      <Stack.Screen name={NavigationPath.NEWDIARY} component={NewDiary} options={{animation:'slide_from_right'}} />
    </Stack.Navigator>
  )
}

export default HomeNavigation