import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'

class Post extends Component {
  comment = () => {
    alert('This will be a comment')
  }

  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <PostCard post={this.props.navigation.state.params.post}>
          <TouchableHighlight onPress={this.comment} underlayColor='white'>
            <Text> Comment </Text>
          </TouchableHighlight>
        </PostCard>
      </View>
    )
  }
}



export default Post
