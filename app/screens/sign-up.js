import React, { Component } from 'react'
import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View
} from 'react-native'

import styles from './styles'
import { CreateUser, dummyGet } from '../lib/services/user-service'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {userName: '', password: '', email: '', firstName: '', lastName: '', passwordValid: true}
    }

    /** Local Storage functions **/

    storeLocally = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value.toString())
            return 'User stored locally'
        } catch (error) {
            // do nothing
        }

    }

    getLocal = async (key) => {
        try {
            return await AsyncStorage.getItem(key) // returns the locally stored id
        } catch (error) {
            // do nothing
        }
    }

    /** local nav and signup functions **/

    feedNavigate = (id) => {
        this.props.navigation.navigate('Feed', { userId: id })
    }

    signUp = (u, p, e, f, l) => {
        // NOTE SignUp will return a promise once its hooked up
        // validate unique userName and email before passing on
        // validate password
        // validate all fields exist
        if(u && p && e && f && l) { // Checks to make sure all fields exist and aren't empty
            if(this.state.passwordValid) {
                CreateUser(u, p, e, f, l).then((result) => {
                    if(result.ok) {
                        // alert(JSON.stringify(result))
                        // alert(l)
                        // the cookie resides in result.headers.map['set-cookie']
                        // save the cookie
                        // route to the feed
                        // let cookie = result.headers.map['set-cookie']
                        storeLocally('cookie', result.headers.get('Set-Cookie')).then((result) => {
                            // do nothing
                        })

                        result.json().then((resultJson) => {
                            let userId = resultJson.user.id
                            storeLocally('currentUser', userId).then((result) => {
                                this.feedNavigate(userId)
                            })
                        })
                    } else if(result.status === 400){
                        // Error handling\
                        alert('This email is invalid.')
                    }
                    else if(result.status === 409){
                        // Error handling\
                        alert('This email is already in use or the username is in use.')
                    }
                    else {
                        alert(result.status)
                    }
                })
                // this.props.navigation.navigate('Feed', { user: 1 }) // Will need to occur asynchronously
            } else {
                alert('Bad password.')
            }
        } else {
            alert('Bad values.')
        }
    }

    validatePassword = (password) => {
        // Check for the proper pattern for the password
        // set a flag based on findings
        this.setState({passwordValid: true})
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
                        onBlur={() => this.validatePassword(this.state.password)}
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
                        KeyboardType='email-address'
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
                            onPress={() => this.signUp(this.state.userName, this.state.password, this.state.email, this.state.firstName, this.state.lastName)}
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
