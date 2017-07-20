import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

import styles from './styles'

class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.post.name, content: this.props.post.content}
    }

    render () {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.profilePicturePlaceholder}>
                        <View style={styles.profilePicture} />
                    </View>

                    <View style={styles.postHeaderRemainder}>
                        <Text>{this.state.name}</Text>
                    </View>
                </View>

                <View style={styles.postBody}>
                    <Text>{this.state.content}</Text>
                </View>

                <View style={styles.postFooter}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}



export default PostCard
