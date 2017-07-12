import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

import styles from './styles'
import AppHeader from '../components/app-header'

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.appBody}>
          <Text style={styles.welcome}>
            This screen will be the profile!
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Connections')}
            title='Check your connections'
            />
        </View>
      </View>
    )
  }
}



export default Profile
