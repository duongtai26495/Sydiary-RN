import React from 'react'
import { NewDiary, DiaryDetail } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationPath from '../constants/NavigationPath'

const Stack = createNativeStackNavigator();
const DiaryNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationPath.NEWDIARY} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NavigationPath.NEWDIARY} component={NewDiary} options={{animation:'slide_from_right'}} />
      <Stack.Screen name={NavigationPath.DIARYDETAIL} component={DiaryDetail} options={{animation:'slide_from_left'}} />
    </Stack.Navigator>
  )
}

export default DiaryNavigation