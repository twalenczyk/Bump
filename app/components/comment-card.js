import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native'

import styles from './styles'

class CommentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.comment.name, content: this.props.comment.content, editable: this.props.comment.editable}
    }

    render () {
        return (
            <View style={styles.comment}>
                <View style={styles.cardHeader}>
                    <View style={styles.profilePicturePlaceholder}>
                        <View style={styles.profilePicture} />
                    </View>

                    <View style={styles.cardHeaderRemainder}>
                        <TouchableHighlight onPress={this.props.profileNav} underlayColor='orange'>
                            <Text>{this.state.name}</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <TextInput
                        style={styles.textField}
                        onChangeText={(text) => this.setState({content: text})}
                        value={this.state.content}
                        multiline={true}
                        editable={this.state.editable}
                        placeholder='Write something...'
                        />
                </View>

                <View style={styles.cardFooter}>
                    <Text>Like</Text>
                </View>
            </View>
        )
    }
}



export default CommentCard
