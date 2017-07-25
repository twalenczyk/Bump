/** Added by Taylor Walenczyk 7/19/17 **/

export async function UserLogin(userName, password) {
    // POST method
    // Login not required
    // Required params: userName password
    try {
        let response = await fetch('http://bump.zjcers.com/sessions', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                username: userName,
                password: password,
            })
        })
        return response
    } catch (e) {
        return e
    }
}

export const SignUp = (userName, password, email, firstName, lastName) => {
    // POST method
    // Login not required
    // Required params: userName password email firstName lastName

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
