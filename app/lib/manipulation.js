import { comments } from '../config/data'

export const addComment = (comment) => {
    comments.push(comment)
    return comments
}
