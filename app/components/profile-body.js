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
import PostCardTouchable from '../components/post-card-touchable'

class ProfileBody extends Component {
    constructor(props) {
        super(props)
        this.state = { user: getUser(this.props.userId) }
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <View style={styles.profilePictureContainer}>
                    <Text style={styles.profileName}> { this.state.user.name } </Text>
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Button
                        onPress={this.props.connectionNav}
                        title='Check your connections'
                        />
                </View>
                <View style={styles.profileFeedContainer}>
                    <ScrollView>
                        {
                            posts.map((item, index) => (
                                <PostCardTouchable key={item.id} onPress={() => this.props.postNav(item)} post={item} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default ProfileBody
