/** Added by Taylor Walenczyk 7/19/17 **/


export async function CreateUser(userName, password, e, firstName, lastName){
    // POST method
    // Login not required
    // Required params: userName password email firstName lastName
    // NOTE email and userName should be globally unique. Validate before sending to backend.
    // no need to import fetch\
    let myHeaders = new Headers();

    let response = await fetch('https://bump.zjcers.com/users/', {
        method: 'POST',
        headers: myHeaders,
        credentials: 'include',
        body: JSON.stringify({
            username: userName,
            password: password,
            email: e,
            firstname: firstName,
            lastname: lastName
        })
    })

    console.log(JSON.stringify(response))

    // let responseJson = await response.json()

    return response

}

export const GetUsers = () => {
    // GET method
    // Login required
    // Required params: ids of users

}

export const UpdateProfile = () => {
    // PUT method
    // Login required
    // Required params: none
    // NOTE password rules apply and there are special instructions for pictures
}
