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
                <View style={styles.headerLeftContainer} />
                <View style={styles.headerCenterContainer}>
                    <Text style={styles.headerLogo}>
                    Bump
                    </Text>
                </View>
                <View style={styles.headerRightContainer}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default AppHeader
