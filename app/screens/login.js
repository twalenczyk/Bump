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
import { loginValidation } from '../lib/validation'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {userName: '', password: ''}
  }

  login = (username, password) => {
    let user = loginValidation(username, password)
    user.exists ? this.feedNavigate(user.user) : this.badLogin()
  }
  feedNavigate = (user) => { this.props.navigation.navigate('Feed', { ...user }) }
  badLogin = () => { alert('Bad Login') }

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
          autoCorrect={false}
          autoCapitalize='none'
          />
        <TextInput
          style={styles.loginTextField}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          />
        <Button
          onPress={() => this.login(this.state.userName, this.state.password)}
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
