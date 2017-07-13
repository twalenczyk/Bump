import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

class PostSubstance extends Component {
  render () {
    return (
      <View>
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
        </View>
      </View>
    )
  }
}



export default PostSubstance
