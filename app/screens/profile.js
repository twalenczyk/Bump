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
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'

class Profile extends Component {
  postNavigate = (post) => {
    this.props.navigation.navigate('Post', post)
  }

  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.coverPhotoContainer}>
        </View>
        <View style={styles.profileFeedContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Connections')}
            title='Check your connections'
            />
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



export default Profile
