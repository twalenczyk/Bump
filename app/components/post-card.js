import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'

class PostCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='white'>
        <View style={styles.post}>
          <Text>{this.props.content}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}



export default PostCard
