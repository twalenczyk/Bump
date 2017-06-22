import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'

class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the login page!
        </Text>
      </View>
    )
  }
}



export default Login
