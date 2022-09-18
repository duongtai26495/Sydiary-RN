import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import style from '../../assets/styles/app_style'
import Colors from '../../assets/color/Colors'
import { useState, useEffect } from 'react'
import { CreateNewDiary } from '../../core/api/functions'
import NavigationPath from '../../constants/NavigationPath'

const NewDiary = ({navigation, route}) => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const SaveNewDiary = async () =>{
    if(title != null && content != null){
      let Diary = {
        'title': title,
        'content': content
      }
      const result = await CreateNewDiary(Diary);
      if(result.status == 'SUCCESS'){
        navigation.navigate(NavigationPath.MAINTAB,{screen:NavigationPath.HOME, params:{refresh : result.data.id}})
      }

    }
  }

  return (
    <SafeAreaView style={[style.container]}>
      <StatusBar
        backgroundColor={Colors.PRIMARY}
        barStyle='dark-content' />
          <View style={[style.top_component_container,{marginTop:'5%',flexDirection:'row',alignContent:'center'}]}>
            <Text style={[{flex:1,fontSize:15,fontWeight:'bold'}]}>{"New diary".toUpperCase()}</Text>
            <View style={[{flex:1, alignItems:'center'}]}>
          <TouchableOpacity onPress={()=> SaveNewDiary() } >
              <Text style={[{color:Colors.PRIMARY, fontWeight:'bold'}]}>{"Save"}</Text>
          </TouchableOpacity>
          </View>
            <View style={[{flex:1, alignItems:'flex-end'}]}>
          <TouchableOpacity onPress={()=> navigation.goBack() } >
              <Text style={[{color:Colors.PRIMARY}]}>{"Cancel"}</Text>
          </TouchableOpacity>
          </View>
          </View>
          
        <ScrollView style={[style.list_container,{flex:1, marginTop:'5%'}]}>
          <View style={[{
            borderColor:Colors.SMOKE, 
            borderWidth:0.3,
            padding:5,
            borderRadius:5}]}>
          <TextInput 
          onChangeText={(value)=>setTitle(value)}
          numberOfLines={2}
          placeholder={"How're you today?"}
          placeholderTextColor={Colors.SMOKE}
          style={[{color:Colors.BLACK, fontSize:16, paddingVertical:5}]}/>
          <TextInput 
          onChangeText={(value)=>setContent(value)}
          multiline
          maxLength={2000}
          numberOfLines={10}
          placeholder={"__________________________________________"}
          placeholderTextColor={Colors.SMOKE}
          style={[{marginTop:'5%',color:Colors.BLACK, fontSize:16, paddingVertical:5}]}/>
          </View>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default NewDiary