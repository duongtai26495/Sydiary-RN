import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../assets/color/Colors';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const app_style = StyleSheet.create({
    container: {
        width:WIDTH,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    list_container:{
        width:WIDTH,
        height:'100%',
        paddingHorizontal:10,
        marginTop:10,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf:'center'
    },
   
    bgFull:{
        position:'absolute',
        zIndex:0,
        width:'100%',
        height:'100%'
    },
    icon_input:{
        width:20,
        height:20
    },
    form_container:{
        width:WIDTH/1.2,
        paddingHorizontal:10
    },
    form_group:{
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:'center',
        marginBottom:10,
    },
    auth_heading:{
        fontSize:25,
        textAlign:'center',
        width:'100%',
        marginVertical:'10%',
        color:Colors.PRIMARY
    },
    auth_input:{
        paddingHorizontal:10,
        paddingVertical:5,
        height:35,
        width:'100%'
    },
    auth_btn:{
        padding:15,
        width:'100%',
        borderRadius:10,
        alignItems:'center'
    },
    labelBtn:{
        color:Colors.WHITE
    },
    labelBtnBlack:{
        color:Colors.BLACK
    },
    auth_link:{
        padding:15,
        width:'100%',
        borderRadius:10,
        alignItems:'center'
    },
    diary_row:{
        padding:15,
        marginBottom:10,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    diary_title:{
        fontSize:15,
        color:Colors.BLACK,
        fontWeight:'bold'
    },
    diary_time:{
        fontSize:10,
        textAlign:'right',
        flex:1,
        alignSelf:'center',
    },
    icon_arrow:{
        width:20,
        height:20,
        marginHorizontal:10,
        opacity:0.1
    }
})

export default app_style