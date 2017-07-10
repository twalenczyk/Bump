import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Login from '../screens/login'
import Feed from '../screens/feed'
import Profile from '../screens/profile'

const FeedTabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  }
})

const LoginNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Feed: {
    screen: FeedTabs,
  }
})

export default LoginNavigator
