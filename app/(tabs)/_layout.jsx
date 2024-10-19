import { View, Text } from 'react-native'
import React from 'react';
import {Tabs} from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors} from "@/constants/Colors"
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: Colors.DEV_PRIMARY,
    }}>
    <Tabs.Screen name="index" options={{
        title: "home page",
        headerShown:false,
        tabBarIcon:({color}) => <Ionicons name="home" size={24} color={"pink"} />

    }} />
    <Tabs.Screen name="about" options={{
        title:"about page",
        headerShown:false,
        tabBarIcon:({color}) => <Ionicons name="information-circle" size={24} color={"pink"}  />
    }}/>
    <Tabs.Screen name="contact" options={{
        title:"contact page",
        headerShown:false,
        tabBarIcon:({color}) => <Ionicons name="globe-outline" size={24} color={"pink"} />
    }}/>
    
    </Tabs>
    
    )

}