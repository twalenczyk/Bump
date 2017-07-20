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

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {userName: '', password: '', snagUser: getUser}
    }


    /** Local Storage functions **/

    storeUserLocally = async (userId) => {
        try {
            await AsyncStorage.setItem('currentUser', userId.toString())
            return 'User stored locally'
        } catch (error) {
            // do nothing
        }

    }

    getLocalUser = async () => {
        try {
            return await AsyncStorage.getItem('currentUser') // returns the locally stored id
        } catch (error) {
            // do nothing
        }
    }

    /** local nav and login functions **/

    feedNavigate = (userId) => {
        this.storeUserLocally(userId).then((result) => {
            this.props.navigation.navigate('Feed', { user: userId })
        })
    }

    badLogin = () => { alert('Bad Login') }

    login = (username, password) => {
        let user = loginValidation(username, password)
        user.exists ? this.feedNavigate(user.user.id) : this.badLogin()
    }

    /** Mounting **/

    componentWillMount() {

        // snag the local user data then set the states accordingly
        this.getLocalUser().then((result) => {
            let localUser = result !== undefined ? this.state.snagUser(result) : '' //@BUG this does not work at the moment. Will rework when Zane gets the server up.
            if( localUser ) { // if local user exists, set the userName and password
                this.setState({userName: localUser.userName})
                this.setState({password: localUser.password})
            }
        })
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
