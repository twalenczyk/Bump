import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the profile!
        </Text>
      </View>
    )
  }
}



export default Profile
