import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView
} from 'react-native'


import Feed from './feed'
import styles from './styles'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {userName: '', password: ''}
  }
  render () {
    return (
      <KeyboardAvoidingView style={styles.loginContainer} behavior='padding'>
        <Text style={styles.loginBumpText}>
          Bump
        </Text>
        <TextInput
          style={styles.loginTextField}
          onChangeText={(text) => this.setState({userName: text})}
          value={this.state.userName}
          autoFocus={true}
          />
        <TextInput
          style={styles.loginTextField}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          />
        <Button
          onPress={() => this.props.navigation.navigate('Feed')}
          title='Login'
          />
        <Button
          onPress={() => this.props.navigation.navigate('Sign Up')}
          title='Sign Up'
          />
      </KeyboardAvoidingView>
    )
  }
}

export default Login
