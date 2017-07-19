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

  /** Post Styles **/

  post: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  postHeader: {
    height: 20,
    flexDirection: 'row',
    backgroundColor: 'orange',
    padding: 2
  },
  postBody: {
    padding: 10,
    backgroundColor: 'red',
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
  postHeaderRemainder: {
    flex: 1,
    marginLeft: 5
  },
  postFooter: {
    marginBottom: 0,
    backgroundColor: 'white'
  },

  /** Connection Styles **/

  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})

export default styles
