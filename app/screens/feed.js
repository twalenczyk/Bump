import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import { getUser } from '../lib/pulls'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { user: getUser(this.props.navigation.state.params.user) }
  }

  postNavigate = (post) => {
    this.props.navigation.navigate('Post', post)
  }

  render () {
    return (
      <View style={styles.container}>
        <AppHeader>
          <Button
            onPress={() => this.props.navigation.navigate('New Post')}
            title='New Post'
            />
        </AppHeader>
        <View>
          <Text> Hey user {this.state.user.name}!</Text>
          <ScrollView>
            {
              posts.map((item, index) => (
                <PostCard key={item.id} onPress={this.postNavigate} post={item} />
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}



export default Feed
