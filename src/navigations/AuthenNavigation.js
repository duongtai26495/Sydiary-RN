import React from 'react'
import { SignIn, SignUp } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationPath from '../constants/NavigationPath'
const Stack = createNativeStackNavigator()
const AuthenNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.SIGNIN} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NavigationPath.SIGNIN} component={SignIn} options={{animation:'slide_from_right'}} />
      <Stack.Screen name={NavigationPath.SIGNUP} component={SignUp} options={{animation:'slide_from_left'}} />
    </Stack.Navigator>
  )
}

export default AuthenNavigation