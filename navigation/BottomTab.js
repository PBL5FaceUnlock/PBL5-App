import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ControlScreen from '../screens/ControlScreen';
import HistoryPage from '../screens/HistoryPage';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#FDA43C',
          showLabel: true,
          activeBackgroundColor:'#ced6e0',
          labelColor:'#FDA43C'
        }}
        screenOptions={{
          headerShown: false
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({color,size}) => (
          <View>
            <Ionicons name="home" size={size} color={color}/>
          </View>
        ),
        tabBarLabel :({color}) => (
          <View>
            <Text fontSize={20} color={color}>Home</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Control" component={ControlScreen} options={{
        tabBarIcon:({color,size}) => (
          <View>
            <Ionicons name="options-outline" size={size} color={color}/>
          </View>
        ),
        tabBarLabel :({color}) => (
          <View>
            <Text fontSize={20} color={color}>Control</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="History" component={HistoryPage} options={{
        tabBarIcon:({color,size}) => (
          <View>
            <Ionicons name="document-text-outline" size={size} color={color}/>
          </View>
        ),
        tabBarLabel :({color}) => (
          <View>
            <Text fontSize={20} color={color}>History</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon:({color,size}) => (
          <View>
            <Ionicons name="person-outline" size={size} color={color}/>
          </View>
        ),
        tabBarLabel :({color}) => (
          <View>
            <Text fontSize={20} color={color}>Profile</Text>
          </View>
        ),
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTab
