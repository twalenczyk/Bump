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
                <View style={styles.connection}>
                    <View style={styles.connectionProfilePicContainer}>
                        <View style={styles.connectionProfilePicPlaceholder} />
                    </View>
                    <View style={styles.connectionInfoContainer}>
                        <Text>{this.props.connection.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}



export default ConnectionCard
