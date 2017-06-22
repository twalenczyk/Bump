import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'

class DirectMessage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the direct message screen!
        </Text>
      </View>
    )
  }
}



export default DirectMessage
