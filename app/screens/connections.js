import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import styles from './styles'
import AppHeader from '../components/app-header'
import ConnectionCard from '../components/connection-card'

class Connections extends Component {
    messageNavigate = (connection) => {
        this.props.navigation.navigate('Direct Message', { ...connection })
    }

    state = {
        names: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]
    }

    render () {
        return (
            <View style={styles.feedContainer}>
                <AppHeader />
                <View style={styles.feedScrollContainer}>
                    <ScrollView>
                        {
                            this.state.names.map((item, index) => (
                                <ConnectionCard key={item.id} connection={item} onPress={() => this.messageNavigate(item)} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default Connections
