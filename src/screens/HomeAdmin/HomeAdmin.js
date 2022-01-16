import { signOut, getAuth } from 'firebase/auth'
import React, { useState, useEffect, useRef } from 'react'
import { Button, TextInput, Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'

export default function HomeAdmin(props) {
  const auth = getAuth()

  const adminMngPrees = () => {
    props.navigation.navigate('AdminManagement')
  }

  const workflowPrees = () => {
    
  }

  const productsPrees = () => {
    
  }

  const logOutPrees = () => {
    signOut(auth).then(() => {
      console.log(props.extraData.username + ' log out.')
      props.navigation.navigate('Login')
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
      <View style={styles.rowMenu}>
          <TouchableOpacity
            style={[styles.adminMng, styles.shadowBtn]}
            onPress={() => adminMngPrees()}>
            <Text style={styles.adminMngTitle}>Admin Management</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowMenu}>
          <TouchableOpacity
            style={[styles.workflow, styles.shadowBtn]}
            onPress={() => workflowPrees()}>
            <Text style={styles.workflowTitle}>Workflow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowMenu}>
          <TouchableOpacity
            style={[styles.products, styles.shadowBtn]}
            onPress={() => productsPrees()}>
            <Text style={styles.productsTitle}>Products</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowMenu}>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => logOutPrees()}>
            <Text style={styles.logoutTitle}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}