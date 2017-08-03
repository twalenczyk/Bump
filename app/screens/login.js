import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    Button,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native'


import Feed from './feed'
import styles from './styles'
import { loginValidation } from '../lib/validation'
import { getUser } from '../lib/pulls'
import { UserLogin } from '../lib/services/session-service'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {userName: '', password: ''}
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

    /** local nav and login functions **/

    feedNavigate = (id) => {
        this.props.navigation.navigate('Feed', { userId: id })
    }

    badLogin = () => { alert('Bad Login') }

    login = (username, password) => {
        // let user = loginValidation(username, password)
        // user.exists ? this.feedNavigate(user.user.id) : this.badLogin()
        UserLogin(username, password).then((result) => {
            if(result.ok) {
                // cookie is result.headers.get('Set-Cookie')
                this.storeLocally('cookie', result.headers.get('Set-Cookie')).then((result) => {
                    // TODO tests the cookie storage, works as of 9/3
                    // this.getLocal('cookie').then((result) => {
                    //     alert(result)
                    // })
                })

                // TODO pass the user id from the response when Zane changes the server
                this.storeLocally('currentUser', 0).then((result) => {
                    // navigate to the next screen
                    this.feedNavigate(0)
                })
            }
        })
    }

    /** Mounting **/

    componentWillMount() {

        // snag the local user data then set the states accordingly
        // this.getLocalUser().then((result) => {
        //     let localUser = result !== undefined ? getUser(result) : '' //@BUG this does not work at the moment. Will rework when Zane gets the server up.
        //     if( localUser ) { // if local user exists, set the userName and password
        //         this.setState({userName: localUser.name})
        //         this.setState({password: localUser.password})
        //     }
        // })
    }

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
