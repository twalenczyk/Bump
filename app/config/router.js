import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Connections from '../screens/connections'
import DirectMessage from '../screens/direct-message'
import Feed from '../screens/feed'
import Login from '../screens/login'
import NewPost from '../screens/new-post'
import Post from '../screens/post'
import Profile from '../screens/profile'
import QrGenerator from '../screens/qr-generator'
import SignUp from '../screens/sign-up'

// Registers a TabNavigator for the main portion of the app
const FeedTabs = TabNavigator({
  Feed: {
    screen: Feed,
    path: 'feed/:user',
    navigationOptions: {
      title: 'Feed'
    }
  },
  'QR Generator': {
    screen: QrGenerator,
    navigationOptions: {
      title: 'QR'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  }
})

// Registers a StackNavigator for overall app navigation
const MainNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Feed: {
    screen: FeedTabs
  },
  Post: {
    screen: Post,
    navigationOptions: {
      title: 'Post'
    }
  },
  'New Post': {
    screen: NewPost,
    navigationOptions: {
      title: 'New Post'
    }
  },
  'Sign Up': {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  Connections: {
    screen: Connections,
    navigationOptions: {
      title: 'Connections'
    }
  },
  'Direct Message': {
    screen: DirectMessage,
    navigationOptions: {
      title: 'Direct Message'
    }
  }

})

export default MainNavigator
