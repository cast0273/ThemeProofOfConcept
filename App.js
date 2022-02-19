import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MarketPlace from './screens/MarketPlace'
import NewsFeed from './screens/NewsFeed'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'

export default function App () {
  const TabBar = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <StatusBar style='auto' />

      <TabBar.Navigator>
        <TabBar.Screen name='MarketPlace' component={MarketPlace} />
        <TabBar.Screen name='NewsFeed' component={NewsFeed} />
        <TabBar.Screen name='Notifications' component={Notifications} />
        <TabBar.Screen name='Profile' component={Profile} />
      </TabBar.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
