import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeAdmin, RegistrationScreen, AdminManagement } from './src/screens'
import { getAuth, onAuthStateChanged, add } from 'firebase/auth'
import { doc } from 'firebase/firestore'
import { decode, encode } from 'base-64'
import { getDoc } from 'firebase/firestore';
import firebase from './src/firebase/config';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()
const auth = getAuth()

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  function onAuthChanged(userRef) {
    if (userRef) {
      getDoc(doc(firebase, 'users', userRef.uid)).then(data => {
        setLoading(false)
        setUser(data.data())
      }).catch((error) => {
        setLoading(false)
      })
    } else {
      setUser(null)
      setLoading(false)
    }
  }

  useEffect(() => {
		const authSubScrib = onAuthStateChanged(auth, onAuthChanged)
    return authSubScrib
	}, [])

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <>
            <Stack.Screen name="Home" options={({ route }) => ({
                title: 'Admin: ' + user.username,
                headerStyle: {
                  backgroundColor: '#338',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textShadowColor: '#000',
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 1}
                },
              })}>
              {props => <HomeAdmin {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="AdminManagement" options={({ route }) => (
              {
                title: 'Admin Management',
                headerStyle: {
                  backgroundColor: '#338',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 16,
                  textShadowColor: '#000',
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 1}
                },
              })}>
              {props => <AdminManagement {...props} extraData={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={({ route }) => (
              {
                headerStyle: {
                  backgroundColor: '#338',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textShadowColor: '#000',
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 1}
                },
              })}/>
            <Stack.Screen name="Registration" component={RegistrationScreen} options={({ route }) => (
              {
                headerStyle: {
                  backgroundColor: '#338',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textShadowColor: '#000',
                  textShadowRadius: 6,
                  textShadowOffset: {width: 1, height: 1}
                },
              })}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}