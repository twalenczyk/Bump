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
import PostCardTouchable from '../components/post-card-touchable'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { user: getUser(this.props.navigation.state.params.user) }
  }

  postNavigate = (post) => {
    this.props.navigation.navigate('Post', {'post': post})
  }

  newPostNavigate = () => {
    this.props.navigation.navigate('New Post')
  }

  render () {
    return (
      <View style={styles.container}>
        <AppHeader>

          <TouchableHighlight style={{marginRight: 5}} onPress={this.newPostNavigate} underlayColor='grey'>
            <Text style={{color: 'orange', fontSize: 20}}>+</Text>
          </TouchableHighlight>

        </AppHeader>
        <View>
          <ScrollView>
            {
              posts.map((item, index) => (
                <PostCardTouchable key={item.id} onPress={() => this.postNavigate(item)} post={item} />
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}



export default Feed
