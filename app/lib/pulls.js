import { users } from '../config/data'

export const getUser = async (id) => {
    let user =  await users.filter( user => user.id === id ).pop() // gets the user with this id

    return user
}
