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
      <View style={styles.post}>
        <View style={styles.postHeader}>

          <View style={styles.profilePicturePlaceholder}>
            <View style={styles.profilePicture}>

            </View>
          </View>

          <View style={styles.postHeaderRemainder}>
            <Text>{this.props.post.name}</Text>
          </View>

        </View>

        <View style={styles.postBody}>
          <View style={styles.contentContainer}>
            <Text>{this.props.post.content}</Text>

          </View>
          <Text>Comment</Text> 
        </View>
      </View>
    )
  }
}



export default PostCard
