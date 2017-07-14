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
    user.exists ? this.feedNavigate(user.user.id) : this.badLogin()
  }
  feedNavigate = (userId) => { this.props.navigation.navigate('Feed', { user: userId}) }
  badLogin = () => { alert('Bad Login') }

  render () {
    return (
      <KeyboardAvoidingView style={styles.loginContainer} behavior='padding'>
        <View style={styles.loginBumpTextContainer}>
          <Text style={styles.loginBumpText}>
            Bump
          </Text>
        </View>

        <View style={styles.loginTextFieldContainer}>
          <TextInput
            style={styles.loginTextField}
            onChangeText={(text) => this.setState({userName: text})}
            value={this.state.userName}
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Name'
            />
          <TextInput
            style={styles.loginTextField}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
            />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            <Button
              style={{flex:1}}
              onPress={() => this.login(this.state.userName, this.state.password)}
              title='Login'
              color='orange'
              />
          </View>
          <View style={styles.signupButton}>
            <Button
              style={{flex:1}}
              onPress={() => this.props.navigation.navigate('Sign Up')}
              title='Sign Up'
              color='white'
              />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Login
