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
