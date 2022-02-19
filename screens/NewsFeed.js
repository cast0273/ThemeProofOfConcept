import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Alert
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function NewsFeed () {
  function chooseBuilding () {
    Alert.alert(
      'Notice',
      'This is where we would redirect to building info screen',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#395E66' }}>
      <View
        id='header'
        style={{ backgroundColor: '#395E66', paddingHorizontal: 17 }}
      >
        <Text
          style={{
            fontFamily: 'Roboto_700Bold',
            color: '#FFFFFF',
            fontSize: 34,
            paddingTop: 11
          }}
        >
          NewsFeed
        </Text>
        <Pressable onPress={chooseBuilding}>
          <Text
            style={{
              fontFamily: 'Roboto_400Regular',
              color: '#FFFFFFA8',
              fontSize: 14,
              paddingTop: 7,
              paddingBottom: 17
            }}
          >
            123 Robinson Rd, Ottawa, ON
            <MaterialCommunityIcons
              name='chevron-right'
              size={14}
              color='#FFFFFFA8'
            />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
