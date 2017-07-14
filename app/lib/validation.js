import { users } from '../config/data'

export const loginValidation = (username, password) => {
  let filteredUsername = users.filter( (user) => user.name === username ) // creates a list of users with this user name
  let filteredPassword = filteredUsername.filter( (user) => user.password === password ) // creates a list of users with this password
  let user = filteredPassword.length > 0 ? filteredPassword.pop() : false // filtered password should only have one user

  return user ? {user: user, exists: true} : {user: '', exists: false}
}
