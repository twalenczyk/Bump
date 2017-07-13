import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'

class Feed extends Component {
  postNavigate = (post) => {
    this.props.navigation.navigate('Post', post)
  }

  state = {
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Sarah', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ]
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
          <ScrollView>
            {
              this.state.names.map((item, index) => (
                <PostCard key={item.id} onPress={this.postNavigate} content={item.name} />
              ))
             }
          </ScrollView>
        </View>
      </View>
    )
  }
}



export default Feed
