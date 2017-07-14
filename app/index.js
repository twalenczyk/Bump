import React, { Component } from 'react'
import Platform from 'react-native'
import MainNavigator from './config/router'

const prefix = Platform.OS == 'android' ? 'bump://bump/' : 'bump://'

class bump2 extends Component {
  render() {
    return <MainNavigator uriPrefix={prefix}/>;
  }
}

export default bump2;
