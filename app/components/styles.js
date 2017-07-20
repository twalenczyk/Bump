import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    /** App Header Styles **/

    header: {
        height: 35,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    headerLogo: {
        fontSize: 20,
        color: 'white'
    },
    headerLeftContainer: {
        flex: 1,
    },
    headerCenterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    /** Post Card Styles **/

    post: {
        flexDirection: 'column',
        margin: 5,
    },

    /** Connection Card Styles **/

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
    connection: {
        height: 40,
        flexDirection: 'row',
        margin: 5,
    },
    connectionProfilePicContainer: {
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    connectionProfilePicPlaceholder: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    connectionInfoContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'white',
    },

    /** Comment Card Styles **/

    comment: {
        flexDirection: 'column',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
    },

    /** Generic Card Styles **/

    cardHeader: {
        height: 20,
        flexDirection: 'row',
        backgroundColor: 'orange',
        padding: 2
    },
    cardBody: {
        padding: 10,
        backgroundColor: 'white',
    },
    profilePicturePlaceholder: {
        width: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    profilePicture: {
        width: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    cardHeaderRemainder: {
        flex: 1,
        marginLeft: 5
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5,
        marginBottom: 0,
        backgroundColor: 'white'
    },
    textField: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'white'
    },

    /** Profile Body styles **/

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

})

export default styles
