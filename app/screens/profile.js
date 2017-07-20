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
import PostCardTouchable from '../components/post-card-touchable'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = { user: getUser(this.props.navigation.state.params.user) }
    }

    postNavigate = (post) => {
        this.props.navigation.navigate('Post', {'post': post})
    }

    render () {
        return (
            <View style={styles.container}>
                <AppHeader />
                <View style={styles.profilePictureContainer}>
                    <Text style={styles.profileName}> { this.state.user.name } </Text>
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Button
                    onPress={() => this.props.navigation.navigate('Connections')}
                    title='Check your connections'
                    />
                </View>
                <View style={styles.profileFeedContainer}>
                    <ScrollView>
                        {
                            posts.map((item, index) => (
                                <PostCardTouchable key={item.id} onPress={() => this.postNavigate(item)} post={item} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default Profile
