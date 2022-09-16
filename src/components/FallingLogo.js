import { Easing ,View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import Icon_path from '../constants/Icon_path'
import Colors from '../assets/color/Colors'
import style from '../assets/styles/app_style'
const FallingLogo = () => {
    useEffect(() => {
        wlcEff()
    }, [])

    const fall = useRef(new Animated.Value(-500)).current;

    const wlcEff = () => {
        Animated.timing(fall, { toValue: 1, duration: 1500, useNativeDriver: true, easing: Easing.bounce }).start();
    }

    return (
        // <Animated.View style={[{transform:[{translateY:fall}]}]}>
        <Animated.View style={[]}>
        <Image source={Icon_path.LOGO} style={[style.logo]} />
        </Animated.View>
    )
}

export default FallingLogo