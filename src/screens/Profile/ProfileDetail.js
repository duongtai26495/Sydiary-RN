import { View, Text, TextInput, RefreshControl,Image, ScrollView, Animated, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CheckTokenIsExist, SignOut, RemoveAndReloadData, LoadDiaryData } from '../../core/api/functions'
import String_constants from '../../constants/String_constants'
import { StackActions } from '@react-navigation/native'
import NavigationPath from '../../constants/NavigationPath'
import Colors from '../../assets/color/Colors'
import style from '../../assets/styles/app_style'

const ProfileDetail = ({ navigation, route }) => {

  const [isFetching, setFetching] = useState(false);

  const Logout = async () => {
    await SignOut();
    if (!await CheckTokenIsExist("Profile")) {
      navigation.dispatch(StackActions.replace(NavigationPath.AUTHENNAVIGATION));
    }
  }

  const Reload = async () => {
    setFetching(true);
    await RemoveAndReloadData();
    setFetching(false);
  }

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={Colors.PRIMARY}
        barStyle='dark-content' />
      <View style={[style.container]}>
        <ScrollView 
          refreshControl={
            <RefreshControl
            refreshing={isFetching}
            onRefresh={()=>Reload()}
          />
          
          }
          style={[{ flex: 1 }]}>
          <View style={[style.form_container]}>
            <View style={[]}>
              
            </View>
            <TouchableOpacity
              onPress={() => Logout()}
              style={[style.auth_btn, { backgroundColor: Colors.PRIMARY }]}>
              <Text style={[style.labelBtn]} >{String_constants.SIGNOUT}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ProfileDetail