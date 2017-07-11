import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import styles from './styles'

class Feed extends Component {

  postNavigate = (post) => {
    this.props.navigation.navigate('Post', post)
  }

  state = {
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
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
      <View>
        <ScrollView>
          {
            this.state.names.map((item, index) => (
              <TouchableHighlight key={item.id} onPress={this.postNavigate} underlayColor="white">
                <View style={styles.item}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableHighlight>
            ))
           }
        </ScrollView>
      </View>
    )
  }
}



export default Feed
