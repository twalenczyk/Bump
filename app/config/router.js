import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Login from '../screens/login'
import Feed from '../screens/feed'
import Profile from '../screens/profile'
import Post from '../screens/post'

// Registers a TabNavigator for the main portion of the app
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

// Registers a StackNavigator for overall app navigation
const MainNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Feed: {
    screen: FeedTabs,
    navigationOptions: {
      title: 'Feed'
    }
  },
  Post: {
    screen: Post,
    navigationOptions: {
      title: 'Post'
    }
  }

})

export default MainNavigator
