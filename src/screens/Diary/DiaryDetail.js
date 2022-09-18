import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoadDiaryData, CheckTokenIsExist } from '../../core/api/functions'
import Colors from '../../assets/color/Colors'
import style from '../../assets/styles/app_style'

const DiaryDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const [diary, setDiary] = useState({});

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    if (await CheckTokenIsExist("Diary Detail") && id != null) {
      console.log("ID: "+id)
      await LoadDiaryData(id)
        .then((result) => {
          setDiary(result.data);
        })
    } else {
      navigation.dispatch(StackActions.replace(NavigationPath.AUTHENNAVIGATION))
    }

  }

  return (
    <SafeAreaView style={[style.container]}>
      <StatusBar
        backgroundColor={Colors.PRIMARY}
        barStyle='dark-content' />
      <View style={[style.container]}>
        <ScrollView style={[style.list_container]}>
        <Text>{diary.title}</Text>
        <Text>{diary.content}</Text>
        <Text>{diary.last_edited}</Text>
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default DiaryDetail