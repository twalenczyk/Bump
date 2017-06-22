import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'


import Feed from './feed'
import styles from './styles'

class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the login page!
        </Text>
        <Button onPress={() => this.props.navigation.navigate('Feed')} title='Login'>

        </Button>
      </View>
    )
  }
}

export default Login
