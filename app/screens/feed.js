import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    Button,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'
import Modal from 'react-native-modal'

import styles from './styles'
import { posts } from '../config/data'
import { getUser } from '../lib/pulls'
import AppHeader from '../components/app-header'
import PostCardTouchable from '../components/post-card-touchable'

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = { user: getUser(this.props.navigation.state.params.user), modalVisible: false}
    }

    postNavigate = (post) => {
        this.props.navigation.navigate('Post', {'post': post})
    }

    newPostNavigate = () => {
        this.props.navigation.navigate('New Post')
    }

    otherProfileNavigate = (userId) => {
        this.props.navigation.navigate('Profile', {'user': userId})
    }

    render () {
        return (
            <View style={styles.container}>
                <AppHeader>
                    <TouchableHighlight style={{marginRight: 5}} onPress={() => this.setState({ modalVisible: true })} underlayColor='grey'>
                        <Text style={{color: 'orange', fontSize: 20}}>+</Text>
                    </TouchableHighlight>
                </AppHeader>
                <View>
                    <Modal
                        isVisible={this.state.modalVisible}
                        >
                        <View style={styles.modalContent}>
                            <View style={styles.modalBody}>
                                <TextInput
                                    style={styles.textField}
                                    onChangeText={(text) => this.setState({content: text})}
                                    value={this.state.content}
                                    multiline={true}
                                    editable={this.state.editable}
                                    placeholder='Write something...'
                                    />
                            </View>
                            <View style={styles.modalFooter}>
                                <TouchableOpacity onPress={ () => this.setState({ modalVisible: false })}>
                                    <View style={styles.button}>
                                        <Text>Post</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <ScrollView>
                        {
                            posts.map((item, index) => (
                                <PostCardTouchable key={item.id} onPress={() => this.postNavigate(item)} post={item} profileNav={() => this.otherProfileNavigate(item.id)}/>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default Feed
