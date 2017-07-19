import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

import styles from './styles'

class AppHeader extends Component {
    render () {
        return (
            <View style={styles.header}>
                <View />
                <View>
                    <Text style={styles.headerLogo}>
                    Bump
                    </Text>
                </View>
                <View>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default AppHeader
