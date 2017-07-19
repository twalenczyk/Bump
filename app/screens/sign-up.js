import React, { Component } from 'react'
import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View
} from 'react-native'

import styles from './styles'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {userName: '', password: '', email: '', firstName: '', lastName: ''}
    }

    render () {
        return (
            <KeyboardAvoidingView style={styles.loginContainer} behavior='padding'>
                <View style={styles.loginBumpTextContainer}>
                    <Text style={styles.loginBumpText}>
                        Bump
                    </Text>
                </View>

                <View style={styles.signupTextFieldContainer}>
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
                    <TextInput
                        style={styles.loginTextField}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='Email'
                        />
                    <TextInput
                        style={styles.loginTextField}
                        onChangeText={(text) => this.setState({firstName: text})}
                        value={this.state.firstName}
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='First Name'
                        />
                    <TextInput
                        style={styles.loginTextField}
                        onChangeText={(text) => this.setState({lastName: text})}
                        value={this.state.lastName}
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='Last Name'
                        />
                </View>

                <View style={styles.buttonContainer}>
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



export default SignUp
