import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    TouchableHighlight,
    View
} from 'react-native'

import styles from './styles'
import { posts, comments } from '../config/data'
import { addComment } from '../lib/manipulation'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'
import CommentCard from '../components/comment-card'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: comments,
            post: this.props.navigation.state.params.post
        }
    }
    comment = () => {
        let newList = addComment({id: 3, name: 'Someone', content: '', editable: true})
        this.setState({comments: newList})
    }

    otherProfileNavigate = (userId) => {
        this.props.navigation.navigate('Profile', {'user': userId})
    }

    render () {
        return (
            <View style={styles.container}>
                <AppHeader />
                <PostCard post={this.props.navigation.state.params.post} profileNav={() => this.otherProfileNavigate(this.state.post.id)}>
                    <TouchableHighlight onPress={this.comment} underlayColor='white'>
                        <Text> Comment </Text>
                    </TouchableHighlight>
                </PostCard>
                <View style={styles.container}>
                    <ScrollView>
                        {
                            this.state.comments.map((item, index) => (
                                <CommentCard key={item.id} comment={item} profileNav={() => this.otherProfileNavigate(item.id)} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default Post
