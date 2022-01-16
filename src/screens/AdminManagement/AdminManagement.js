import React, { useState, useEffect, useRef } from 'react'
import { Button, TextInput, Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import firebase from '../../firebase/config'
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, doc, onSnapshot, query } from 'firebase/firestore'

export default function AdminManagement(props) {
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    const adminsSubscrib = onSnapshot(query(collection(doc(firebase, 'users', props.extraData.id), 'admins')), data => {
      setAdmins(data.docs.map(item => item.data()))
    })
    return () => adminsSubscrib()
  }, [])

  const addAdminPrees = () => {

  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.rowAdmin}>
          {admins.map((item, index) => {
            return <TouchableOpacity key={index}
              style={[styles.admin, styles.shadowBtn]}>
              <Text style={styles.adminTitle}>{item.name}</Text>
              <Text style={styles.adminWorkflow}>
                <Text style={{fontWeight: 'bold'}}>
                  Workflow:
                </Text>
                <Text>
                  All
                </Text>
              </Text>
              <Text style={styles.adminProducts}>
                <Text style={{fontWeight: 'bold'}}>
                  Products:
                </Text>
                <Text>
                  All
                </Text>
              </Text>
            </TouchableOpacity>
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addAdminBtn}>
        <Icon
          name='user-plus'
          size={30}
          color={'#fff'}
        >
        </Icon>
      </TouchableOpacity>
    </View>
  )
}