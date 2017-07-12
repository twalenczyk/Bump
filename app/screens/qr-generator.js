import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './styles'
import AppHeader from '../components/app-header'

class QrGenerator extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <Text style={styles.welcome}>
          This screen will be the qr generator!
        </Text>
      </View>
    )
  }
}



export default QrGenerator
