/** Added by Taylor Walenczyk 7/19/17 **/

export async function UserLogin(userName, password) {
    // POST method
    // Login not required
    // Required params: userName password
    let myHeaders = new Headers();
    myHeaders.append('content-type', 'application/json');

    try {
        let response = await fetch('https://bump.zjcers.com/sessions/', {
            method: 'POST',
            headers: myHeaders,
            credentials: 'include',
            body: JSON.stringify({
                username: userName,
                password: password,
            })
        })
        // let responseJSON = await response.json()

        return response
    } catch (e) {
        return e
    }
}

export const Logout = () => {
    // DELETE method
    // Login required
    // Required params: none

}

export const Refresh = () => {
    // GET method
    // Login required
    // Required params: none
}
