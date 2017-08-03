/** Added by Taylor Walenczyk 7/19/17 **/

export async function CreateUser(userName, password, email, firstName, lastName) {
    // POST method
    // Login not required
    // Required params: userName password email firstName lastName
    // NOTE email and userName should be globally unique. Validate before sending to backend.
    // no need to import fetch\
    let myHeaders = new Headers()
    myHeaders.append('content-type', 'application/json')

    let response = await fetch('https://bump.zjcers.com/users/', {
        method: 'POST',
        headers: myHeaders,
        credentials: 'include',
        body: JSON.stringify({
            username: userName,
            password: password,
            email: email,
            firstname: firstName,
            lastname: lastName
        })
    })

    let responseJson = await response.json()

    return responseJson

}

export async function GetUsers(users, cookie) {
    // GET method
    // Login required
    // Required params: array of users
    let url = 'https://bump.zjcers.com/users/'+users.toString() // comma seperated list of users in the url
    let myHeaders = new Headers()
    myHeaders.append('content-type', 'application/json')
    myHeaders.append('Set-Cookie', cookie)

    let response = await fetch(url, {
        method: 'POST',
        headers: myHeaders,
    })


}

export async function dummyGet() {
    let response = await fetch('http://bump.zjcers.com/users/', {
        method: 'GET'
    })

    // let responseJson = await response.json()

    return response
}

export const UpdateProfile = () => {
    // PUT method
    // Login required
    // Required params: none
    // NOTE password rules apply and there are special instructions for pictures
}
