import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  color,
  shadowColor
} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MarketPlace from './screens/MarketPlace'
import NewsFeed from './screens/NewsFeed'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'

//  **cannot use safeAreaView outside TabBar**

export default function App () {
  const TabBar = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <StatusBar style='auto' />

      <TabBar.Navigator
        screenOptions={({ navigation, route }) => ({
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#395E66', height: 136 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'MarketPlace') {
              iconName = 'store'
            } else if (route.name === 'NewsFeed') {
              iconName = 'newspaper'
            } else if (route.name === 'Notifications') {
              iconName = 'bell'
            } else if (route.name === 'Profile') {
              iconName = 'account'
            }
            return (
              <MaterialCommunityIcons name={iconName} size={32} color={color} />
            )
          },
          tabBarActiveTintColor: '#395E66',
          tabBarInactiveTintColor: '#395E6654',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 84,
            paddingTop: 17,
            paddingBottom: Platform.OS === 'ios' ? 34 : 17,
            paddingHorizontal: 17,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.14,
            shadowRadius: 34,
            elevation: 16
          },
          headerTitle: props => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start'
              }}
            >
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: '600',
                  color: '#FFFFFF',
                  paddingBottom: 7
                }}
              >
                {props.children}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#FFFFFFA8',
                  paddingBottom: 17
                }}
              >
                120 Robinson Rd, Ottawa, ON
              </Text>
            </View>
          )
        })}
      >
        <TabBar.Screen name='MarketPlace' component={MarketPlace} />
        <TabBar.Screen name='NewsFeed' component={NewsFeed} />
        <TabBar.Screen name='Notifications' component={Notifications} />
        <TabBar.Screen name='Profile' component={Profile} />
      </TabBar.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  colors: {
    color: '#97D654', //lightGreen
    backgroundColor: '#97D654', //lightGreen

    color: '#29AA6B', //green
    backgroundColor: '#29AA6B', //green

    color: '#0C6350', //darkGreen
    backgroundColor: '#0C6350', //darkGreen

    color: '#395E66', //darkBlue
    backgroundColor: '#395E66', //darkBlue

    color: '#DFE6ED', //lightBlueSilver
    backgroundColor: '#DFE6ED', //lightBlueSilver

    color: '#191919', //black
    backgroundColor: '#191919', //black

    color: '4E4D4D', //darkGrey
    backgroundColor: '4E4D4D', //darkGrey

    color: '#B3B4B3', //lightGrey
    backgroundColor: '#B3B4B3', //lightGrey

    color: '#FFFFFF', //white
    backgroundColor: '#FFFFFF' //white
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
