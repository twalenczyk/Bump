import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  /** General Styles **/

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginTextField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  loginBumpText: {
    fontSize: 50,
    marginBottom: 50
  },

  /** Feed Styles **/

  /** Profile Styles **/

  coverPhotoContainer: {
    flex: 2,
    backgroundColor: '#0066ff'
  },
  profileFeedContainer: {
    flex: 3,
    backgroundColor: '#F5FCFF'
  }
})

export default styles
