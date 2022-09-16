import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage_constants from '../../constants/Storage_constants';
import { CheckTokenIsExist, LoadDiaryData } from '../../core/api/functions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
import Colors from '../../assets/color/Colors';
import style from '../../assets/styles/app_style';
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

  const ItemRow = (item) => {
   
    if (item.active) {
      const content = item.content.length > 40 ? item.content.slice(0, 40) + "..." : item.content;
      return (
        <TouchableOpacity style={[style.diary_row]} key={item.id} >
          <View style={[{ flex: 2, height: '100%', flexDirection: 'column' }]}>
            <Text style={[style.diary_title]}>{item.title}</Text>
            <Text style={[style.diary_desc]}>{content}</Text>
          </View>
          <View style={[{ flex: 1, height: '100%', flexDirection: 'column' }]}>
            <Text style={[style.diary_title]}>{item.last_edited}</Text>
          </View>
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