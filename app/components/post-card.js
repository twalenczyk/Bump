import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import PostSubstance from './post-substance'

class PostCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='grey'>
        <View style={styles.post}>
          <PostSubstance post={this.props.post} />
        </View>
      </TouchableHighlight>
    )
  }
}



export default PostCard
