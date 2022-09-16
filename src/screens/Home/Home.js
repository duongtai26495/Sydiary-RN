import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage_constants from '../../constants/Storage_constants';
import { CheckTokenIsExist, LoadDiaryData } from '../../core/api/functions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
import Colors from '../../assets/color/Colors';
import style from '../../assets/styles/app_style';
import Icon_path from '../../constants/Icon_path';
const Home = ({ navigation, route }) => {

  useEffect(() => {
    checkUserLogin()
  }, [])

  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(false);

  const checkUserLogin = async () => {
    if (!await CheckTokenIsExist("Home")) {
      navigation.dispatch(StackActions.replace(NavigationPath.AUTHENNAVIGATION))
    } else {
      await getData()
    }
  }

  const getData = async () => {
    setFetching(true);
    setData([]);
    await LoadDiaryData()
      .then((result) => {
        setData(result.data)
        setFetching(false);
      })

  }

  const openDiaryDetail = (id) => {
    navigation.navigate(NavigationPath.DIARYDETAIL, {id})
  }


  const ItemRow = (item) => {
   
    if (item.active) {
      const content = item.content.length > 40 ? item.content.slice(0,40) + "..." : item.content;
      const title = item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title;
      return (
        <TouchableOpacity onPress={()=>openDiaryDetail(item.id)} style={[style.diary_row]} key={item.id} >
          <View style={[{ flex: 4, flexDirection: 'column' }]}>
            <Text style={[style.diary_title]}>{title}</Text>
            <Text style={[style.diary_desc]}>{content}</Text>
          </View>
          <View style={[{ flex: 1, borderLeftWidth:1,flexDirection:'row', borderColor:Colors.SMOKE,paddingLeft:5}]}>
            <Text style={[style.diary_time]}>{item.last_edited}</Text>
          </View>
          <Image source={Icon_path.ARROW} style={[style.icon_arrow]} />
        </TouchableOpacity>)
    }

  }



  return (
    <SafeAreaView style={[style.container]}>
      <StatusBar
        backgroundColor={Colors.PRIMARY}
        barStyle='dark-content' />
        {isFetching ? (
        <ActivityIndicator
          color={Colors.PRIMARY} />
      ) :
        (
          <FlatList
            style={[{ flex: 1 }, style.list_container]}
            data={data}
            refreshing={isFetching}
            onRefresh={() => getData()}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              ItemRow(item)
            )}

          />
        )}
    </SafeAreaView>
  )
}

export default Home