
import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import NavigationPath from '../constants/NavigationPath'
import Icon_path from '../constants/Icon_path'
import Colors from '../assets/color/Colors'
import { Home, ProfileDetail } from '../screens'
import HomeNavigation from './HomeNavigation'
const Tab = createMaterialBottomTabNavigator()
const iconSize = 20
const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={NavigationPath.HOME}
            shifting={true}
            activeColor={Colors.PRIMARY}
            inactiveColor={Colors.LIGHT}
            barStyle={{ backgroundColor: Colors.WHITE, borderTopColor: Colors.PRIMARY, borderTopWidth: 0.5 }}
            >
            <Tab.Screen
                name={NavigationPath.HOME}
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={Icon_path.HOME}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.PRIMARY : Colors.SMOKE
                                }}
                            />
                        </View>
                    )
                }} />
        
                <Tab.Screen
                name={NavigationPath.PROFILE}
                component={ProfileDetail}
                options={{
                    headerShown: false,
                    animation: true,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={Icon_path.PROFILE}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.PRIMARY : Colors.SMOKE
                                }}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainTab