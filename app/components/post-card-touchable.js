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
            <TouchableHighlight onPress={this.props.onPress} underlayColor='grey'>
                <View style={{flex: 1}}>
                    <PostCard post={this.props.post} />
                </View>
            </TouchableHighlight>
        )
    }
}



export default PostCardTouchable
