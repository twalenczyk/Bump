import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

import styles from './styles'

class ConnectionSubstance extends Component {
    render () {
        return (
            <Text>{this.props.connection.name}</Text>
        )
    }
}



export default ConnectionSubstance
