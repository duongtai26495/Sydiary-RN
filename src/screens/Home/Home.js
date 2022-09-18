import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage_constants from '../../constants/Storage_constants';
import { CheckTokenIsExist, LoadDiaryData, SignOut } from '../../core/api/functions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../../constants/NavigationPath'
import Colors from '../../assets/color/Colors';
import style from '../../assets/styles/app_style';
import Icon_path from '../../constants/Icon_path';
import String_constants from '../../constants/String_constants';
import DiaryColors from '../../assets/color/DiaryColors';
const Home = ({ navigation, route }) => {
  const {refresh} =route.params;

  useEffect(() => {
    checkUserLogin();
  }, [refresh])

  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(false);

  const checkUserLogin = async () => {
    if (!await CheckTokenIsExist("Home")) {
      navigation.dispatch(StackActions.replace(NavigationPath.AUTHENNAVIGATION))
    } else {
      await getData()
    }
  }
  
  const OpenNewDiary = () =>{
    navigation.navigate(NavigationPath.DIARYNAVIGATION, {screen:NavigationPath.NEWDIARY})
  }

  const emptyData = () => {
    return(
      <View>
        <Text style={[{padding:5,width:'100%',textAlign:'center'}]}>{String_constants.NODIARY.toUpperCase()}</Text>
      </View>
    )
  }

  const topFunctions = () => {
    return(
      <View style={[{width:'100%',height:70,flexDirection:'row',justifyContent:'space-between'}]}>
          <View style={[{flex:1,height:'100%',flexDirection:'column',justifyContent:'center'}]}>
            <Text style={[{fontSize:25,fontWeight:'bold'}]}>Diary</Text>
            <Text style={[{opacity:0.5}]}>{data == null ? "No diary to show" : "Total " + data.length +" diaries"} </Text>
          </View>
          <View style={[{height:'100%',flex:1}]}>
          <TouchableOpacity onPressOut={()=>OpenNewDiary()} style={[{alignSelf:'flex-end'}]}>
          <Text style={[{fontSize:50}]}>{"+"}</Text>
          </TouchableOpacity>
            
          </View>
      </View>
    )
  }
  const getData = async () => {
    setFetching(true);
    setData([]);
    await LoadDiaryData()
      .then((result) => {
        setData(result.data)
        setFetching(false)
      })
  }

  const openDiaryDetail = (id) => {
    navigation.navigate(NavigationPath.DIARYNAVIGATION,{ screen: NavigationPath.DIARYDETAIL, params: {id}})
  }

  
  const ItemRow = (item) => {
    if (item.active) {
      const content = item.content.length > 40 ? item.content.slice(0,40) + "..." : item.content;
      const title = item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title;

      return (

        <TouchableOpacity onPress={()=>openDiaryDetail(item.id)} style={[style.diary_row]} key={item.id} >
          <View style={[style.diary_color,{backgroundColor:Colors.PRIMARY}]}>
          </View>
          <View style={[{ flex: 4, flexDirection: 'column',marginLeft:5 }]}>
            <Text numberOfLines={1} style={[style.diary_title]}>{title}</Text>
            <Text numberOfLines={1} style={[style.diary_desc]}>{content}</Text>
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
        <View style={[style.top_component_container]}>
        {topFunctions()}
        </View>
        
          <FlatList
            style={[{ flex: 1 }, style.list_container]}
            data={data}
            refreshing={isFetching}
            onRefresh={() => getData()}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              ItemRow(item)
            )}
            ListEmptyComponent={
              emptyData()
            }
          />
    </SafeAreaView>
  )
}

export default Home