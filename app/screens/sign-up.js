import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'

class SignUp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the sign up page!
        </Text>
      </View>
    )
  }
}



export default SignUp
