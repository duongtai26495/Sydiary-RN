import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../assets/color/Colors';

const height = Dimensions.get('window').height;
const authen_style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    authen_form: {
        justifyContent: 'space-around',
        flex: 1,
    },
    container_authen:{
        backgroundColor:Colors.DARK,
    },
    view_authen:{
        alignSelf:'center'
    }
})

export default authen_style