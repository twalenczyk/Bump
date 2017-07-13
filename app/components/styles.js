import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  /** App Header Styles **/

  header: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerLogo: {
    fontSize: 20
  },

  /** App Header Styles **/

  post: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'powderblue'
  },
  postBody: {
    flex: 3,
    backgroundColor: 'skyblue'
  },
  profilePicturePlaceholder: {
    width: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  profilePicture: {
    width: 20,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  postHeaderRemainder: {
    flex: 1,
    marginLeft: 5
  },
  contentContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  }
})

export default styles
