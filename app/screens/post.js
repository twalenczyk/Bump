import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import AppHeader from '../components/app-header'
import PostSubstance from '../components/post-substance'

class Post extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.postContainer}>
          <PostSubstance post={posts[0]}/>
        </View>
      </View>
    )
  }
}



export default Post
