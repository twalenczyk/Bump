import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

class Post extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the a post!
        </Text>
      </View>
    )
  }
}



export default Post
