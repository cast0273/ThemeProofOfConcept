import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Alert,
  Platform,
  Image
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const posts = [
  {
    id: 'p1',
    avatar:
      'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    name: 'Adam Grantson',
    timestamp: '30m',
    message:
      'Just went for a walk outside and found a pair of mittens. Does anybody recall losing them?',
    picture: null,
    likes: 12,
    comments: 8
  },
  {
    id: 'p2',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Rachel Jaimes',
    timestamp: '2h',
    message:
      'Just went for a walk outside and found a pair of mittens. Does anybody recall losing them?',
    picture:
      'https://www.mscareergirl.com/wp-content/uploads/2017/07/pexels-photo1-620x400.jpg',
    likes: 12,
    comments: 8
  }
]

export default function NewsFeed () {
  function chooseBuilding () {
    Alert.alert(
      'Notice',
      'This is where we would redirect to building info screen',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    )
  }
  function clickAnnouncements () {
    Alert.alert(
      'Notice',
      'This is where we would redirect to announcements screen',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    )
  }
  function clickPost () {
    Alert.alert('Notice', `This is where we would redirect to post's screen`, [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ])
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#395E66' }}>
      <View
        id='header'
        style={{
          backgroundColor: '#395E66',
          paddingHorizontal: 17,
          paddingTop: Platform.OS === 'ios' ? 0 : 34
        }}
      >
        <Text
          id='screenName'
          style={{
            fontFamily: 'Roboto_700Bold',
            color: '#FFFFFF',
            fontSize: 34,
            paddingTop: 11
          }}
        >
          NewsFeed
        </Text>
        <Pressable id='currentBuilding' onPress={chooseBuilding}>
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

      <View
        id='feed'
        style={{
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 27,
          borderTopLeftRadius: 27
        }}
      >
        {/* //announcements */}
        <Pressable
          id='announcements'
          onPress={clickAnnouncements}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 22,
            paddingVertical: 17,
            marginHorizontal: 17,
            marginTop: 17,
            marginBottom: 13,

            borderRadius: 24,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.14,
            shadowRadius: 34,
            elevation: 16
          }}
        >
          <Text
            id='title'
            style={{
              fontFamily: 'Roboto_500Medium',
              fontSize: 22,
              color: '#395E66'
            }}
          >
            Announcements
          </Text>
          <View
            id='indice'
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <View
              id='counterBadge'
              style={{
                backgroundColor: '#395E66',
                paddingHorizontal: 8,
                paddingVertical: 1,
                borderRadius: 99
              }}
            >
              <Text
                id='counter'
                style={{
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 15,
                  color: '#FFFFFF',
                  lineHeight: 22
                }}
              >
                2
              </Text>
            </View>
            <MaterialCommunityIcons
              name='chevron-right'
              size={36}
              color='black'
            />
          </View>
        </Pressable>

        {/* //post */}
        <Pressable
          id='post'
          onPress={clickPost}
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 17,
            paddingTop: 17,
            paddingBottom: 22,
            marginHorizontal: 17,
            marginVertical: 9,

            borderRadius: 24,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.14,
            shadowRadius: 34,
            elevation: 16
          }}
        >
          <View
            id='postHeader'
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <View
              id='userPic-Name'
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 45, height: 45, borderRadius: 12 }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
                }}
              />
              <Text
                id='userName'
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_500Medium',
                  color: '#191919',
                  marginHorizontal: 8
                }}
              >
                Adam Grantson
              </Text>
            </View>

            <Text
              id='timePosted'
              style={{
                fontSize: 14,
                fontFamily: 'Roboto_400Regular',
                color: '#191919A8'
              }}
            >
              30m
            </Text>
          </View>

          <Text
            id='postMessage'
            style={{
              fontSize: 17,
              fontFamily: 'Roboto_400Regular',
              marginTop: 12,
              width: '100%'
            }}
          >
            Just went for a walk outside and found a pair of mittens. Does
            anybody recall losing them?
          </Text>

          <View
            id='actions'
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              marginTop: 17
            }}
          >
            <View
              id='like'
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialCommunityIcons
                name='heart-outline'
                size={24}
                color='#191919'
              />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_400Regular',
                  marginLeft: 8,
                  marginRight: 17
                }}
              >
                12
              </Text>
            </View>

            <View
              id='comment'
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialCommunityIcons
                name='message-outline'
                size={24}
                color='#191919'
              />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_400Regular',
                  marginLeft: 8,
                  marginRight: 17
                }}
              >
                8
              </Text>
            </View>
          </View>
        </Pressable>

        {/* //post+pic */}
        <Pressable
          id='postPicture'
          onPress={clickPost}
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 17,
            paddingTop: 17,
            paddingBottom: 22,
            marginHorizontal: 17,
            marginVertical: 9,

            borderRadius: 24,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.14,
            shadowRadius: 34,
            elevation: 16
          }}
        >
          <View
            id='postHeader'
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <View
              id='userPic-Name'
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 45, height: 45, borderRadius: 12 }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }}
              />
              <Text
                id='userName'
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_500Medium',
                  color: '#191919',
                  marginHorizontal: 8
                }}
              >
                Rachel Jaimes
              </Text>
            </View>

            <Text
              id='timePosted'
              style={{
                fontSize: 14,
                fontFamily: 'Roboto_400Regular',
                color: '#191919A8'
              }}
            >
              2h
            </Text>
          </View>

          <Text
            id='postMessage'
            style={{
              fontSize: 17,
              fontFamily: 'Roboto_400Regular',
              marginTop: 12,
              width: '100%'
            }}
          >
            Going for a walk again, later this after noon! Who's joining me?
          </Text>

          <Image
            style={{
              width: '100%',
              height: 204,
              borderRadius: 16,
              marginTop: 12
            }}
            source={{
              uri:
                'https://www.mscareergirl.com/wp-content/uploads/2017/07/pexels-photo1-620x400.jpg'
            }}
          />

          <View
            id='actions'
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              marginTop: 17
            }}
          >
            <View
              id='like'
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialCommunityIcons
                name='heart-outline'
                size={24}
                color='#191919'
              />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_400Regular',
                  marginLeft: 8,
                  marginRight: 17
                }}
              >
                12
              </Text>
            </View>

            <View
              id='comment'
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialCommunityIcons
                name='message-outline'
                size={24}
                color='#191919'
              />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto_400Regular',
                  marginLeft: 8,
                  marginRight: 17
                }}
              >
                8
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
