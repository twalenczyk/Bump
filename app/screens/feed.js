import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

class Feed extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This screen will be the feed!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Feed
