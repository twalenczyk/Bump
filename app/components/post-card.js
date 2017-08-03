import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native'

import styles from './styles'
import { users } from '../config/data'

class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.post.name, content: this.props.post.content}
    }

    render () {
        return (
            <View style={styles.post}>
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
                    <View style={styles.timestampContainer}>
                        <Text style={styles.timestamp}>timestamp</Text>
                        <ScrollView
                            horizontal={true}
                            >
                            {
                                users.map((item, index) => (
                                    <View key={item.id} style={styles.profilePicture} />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <Text>{this.state.content}</Text>
                </View>

                <View style={styles.cardFooter}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}



export default PostCard
