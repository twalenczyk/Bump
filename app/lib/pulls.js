import { users } from '../config/data'

export const getUser = (id) => {
  let user = users.filter( user => user.id === id ).pop() // gets the user with this id

  return user
}
