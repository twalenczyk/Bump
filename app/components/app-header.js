import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

import styles from './styles'

class AppHeader extends Component {

  render () {
    return (
      <View style={styles.header}>
        <Text>
          Bump
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('New Post')}
          title='New Post'
          />
      </View>
    )
  }
}

export default AppHeader
