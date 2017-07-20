import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

import styles from './styles'

class CommentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.comment.name, content: this.props.comment.content}
    }

    render () {
        return (
            <View style={styles.comment}>
                <View style={styles.cardHeader}>
                    <View style={styles.profilePicturePlaceholder}>
                        <View style={styles.profilePicture} />
                    </View>

                    <View style={styles.cardHeaderRemainder}>
                        <Text>{this.state.name}</Text>
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <Text>{this.state.content}</Text>
                </View>

                <View style={styles.cardFooter}>
                    <Text>Like</Text>
                </View>
            </View>
        )
    }
}



export default CommentCard
