import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'

class NewPost extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the new post screen!
        </Text>
      </View>
    )
  }
}



export default NewPost
