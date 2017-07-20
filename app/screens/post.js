import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    TouchableHighlight,
    View
} from 'react-native'

import styles from './styles'
import { posts } from '../config/data'
import AppHeader from '../components/app-header'
import PostCard from '../components/post-card'
import CommentCard from '../components/comment-card'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {id: 0, name: 'Bill', content: 'This sucks!', editable: true},
                {id: 1, name: 'Stan', content: 'I know, right?', editable: false}
            ]
        }
    }
    comment = () => {

    }

    render () {
        return (
            <View style={styles.container}>
                <AppHeader />
                <PostCard post={this.props.navigation.state.params.post}>
                    <TouchableHighlight onPress={this.comment} underlayColor='white'>
                        <Text> Comment </Text>
                    </TouchableHighlight>
                </PostCard>
                <View style={styles.container}>
                    <ScrollView>
                        {
                            this.state.comments.map((item, index) => (
                                <CommentCard key={item.id} comment={item} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default Post
