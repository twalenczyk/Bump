import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import { getUser } from '../lib/pulls'
import AppHeader from '../components/app-header'
import ProfileBody from '../components/profile-body'

class Profile extends Component {
    postNavigate = (post) => {
        this.props.navigation.navigate('Post', {'post': post})
    }

    connectionNavigate = () => {
        this.props.navigation.navigate('Connections')
    }

    render () {
        return (
            <View style={styles.container}>
                <AppHeader />
                <ProfileBody userId={this.props.navigation.state.params.user} postNav={this.postNavigate} connectionNav={this.connectionNavigate}/>
            </View>
        )
    }
}



export default Profile
