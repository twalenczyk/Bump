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

class Profile extends Component {
  postNavigate = (post) => {
    this.props.navigation.navigate('Post', post)
  }

  state = {
      posts: [
         {'date': 'Ben', 'content': 'Sup', 'id': 1},
         {'date': 'Susan', 'content': 'Hi', 'id': 2},
         {'date': 'Robert', 'content': 'How do you do?', 'id': 3},
         {'date': 'Mary', 'content': 'Not bad', 'id': 4},
         {'date': 'Daniel', 'content': 'How about yourself?', 'id': 5},
         {'date': 'Laura', 'content': 'Not too shabby, amigo.', 'id': 6},
         {'date': 'John', 'content': 'I cannot wait to get home and have a beer', 'id': 7},
         {'date': 'Debra', 'content': 'Nothing better than a cold one!', 'id': 8},
         {'date': 'Aron', 'content': 'Right?', 'id': 9},
         {'date': 'Ann', 'content': 'It is like we are the smae person', 'id': 10},
         {'date': 'Steve', 'content': 'Wait', 'id': 11},
         {'date': 'Olivia', 'content': 'We are.', 'id': 12}
      ]
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
              this.state.posts.map((item, index) => (
                <TouchableHighlight key={item.id} onPress={this.postNavigate} underlayColor="white">
                  <View style={styles.item}>
                    <Text>{item.date}</Text>
                    <Text>{item.content}</Text>
                  </View>
                </TouchableHighlight>
              ))
             }
          </ScrollView>
        </View>
      </View>
    )
  }
}



export default Profile
