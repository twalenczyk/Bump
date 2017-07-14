import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import ConnectionSubstance from './connection-substance'

class ConnectionCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="white">
        <View style={styles.item}>
          <ConnectionSubstance connection={this.props.connection} />
        </View>
      </TouchableHighlight>
    )
  }
}



export default ConnectionCard
