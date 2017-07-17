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
        <View style={styles.container}>
          <View style={styles.postContainer}>
            <PostCard post={this.props.navigation.state.params.post}/>
          </View>
          <View style={styles.postContainer2} />
        </View>
      </View>
    )
  }
}



export default Post
