import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

import styles from './styles'
import PostCard from './post-card'

class PostCardTouchable extends Component {
    render () {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor='lightgrey'>
                <View style={{flex: 1}}>
                    <PostCard post={this.props.post} profileNav={this.props.profileNav} />
                </View>
            </TouchableHighlight>
        )
    }
}



export default PostCardTouchable
