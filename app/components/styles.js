import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    /** App Header Styles **/

    header: {
        height: 35,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    headerLogo: {
        fontSize: 20,
        color: 'white'
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
        padding: 2,
        marginBottom: 0,
        backgroundColor: 'white'
    },
    textField: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'white'
    },

})

export default styles
