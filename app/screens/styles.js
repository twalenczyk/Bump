import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    // NOTE styles for components like post card are contained in the components folder. Don't style them here unless it's page specific stuff.

    /** General Styles **/

    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },

    /** Login Styles **/

    loginContainer: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTextFieldContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
    },
    loginTextField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    loginBumpTextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
        },
        loginBumpText: {
        fontSize: 50,
        color: 'orange'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 400
    },
    loginButton: {
        backgroundColor: 'white',
        height: 40,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 5,
    },
    signupButton: {
        backgroundColor: 'orange',
        height: 40,
        marginLeft: 50,
        marginRight: 50
    },

    /** Feed Styles **/

    /** Profile Styles **/

    profilePictureContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066ff'
    },
    profileFeedContainer: {
        flex: 5,
        backgroundColor: 'lightgrey'
    },
    profileDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    profileName: {
        fontSize: 30,
        color: 'white'
    },

    /** Post Styles **/


    /** Sign Up Styles **/

    signupTextFieldContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        marginTop: 20,
        marginBottom: 20,
    },

})

export default styles
