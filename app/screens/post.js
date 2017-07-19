import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'

class Post extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <PostCard post={this.props.navigation.state.params.post}/>
      </View>
    )
  }
}



export default Post
