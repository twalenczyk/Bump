import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'

import styles from './styles'
import AppHeader from '../components/app-header'

class DirectMessage extends Component {
    // componentWillMount () {
    //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    // }
    //
    // componentWillUnmount () {
    //   this.keyboardDidShowListener.remove();
    //   this.keyboardDidHideListener.remove();
    // }
    //
    // _keyboardDidShow () {
    //   alert('Keyboard Shown');
    // }
    //
    // _keyboardDidHide () {
    //   alert('Keyboard Hidden');
    // }

    render () {
        const { name } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <AppHeader />
                <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={100}>
                    <ScrollView>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                        <Text style={styles.welcome}>
                            This screen will be the direct message screen, { name }!
                        </Text>
                    </ScrollView>
                    <TextInput style={styles.loginTextField} keyboardType='default' />
                </KeyboardAvoidingView>
            </View>
        )
    }
}



export default DirectMessage
