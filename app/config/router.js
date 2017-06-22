import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Login from '../screens/login'
import Feed from '../screens/feed'

const LoginNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Feed: {
    screen: Feed,
  },
})

export default LoginNavigator
