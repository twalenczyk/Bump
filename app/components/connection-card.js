import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

import styles from './styles'

class ConnectionCard extends Component {
    render () {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor="white">
                <View style={styles.item}>
                    <Text>{this.props.connection.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}



export default ConnectionCard
