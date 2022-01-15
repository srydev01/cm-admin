import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import firebase from '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { onSnapshot, collection, query, doc, where, orderBy, setDoc } from 'firebase/firestore'

export default function RegistrationScreen(props) {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const auth = getAuth()

	const onFooterLinkPress = () => {
		props.navigation.navigate('Login')
	}

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.")
			return
		}
		createUserWithEmailAndPassword(auth, email, password).then(res => {
			const uid = res.user.uid
			const data = {
				id: uid,
				username: username,
				email: email,
				type: 'Admin'
			}
			setDoc(doc(firebase, 'users', uid), data).then(() => {
				props.navigation.navigate('Home', {user: data})
			})
		})
	}

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<Image
					style={styles.logo}
				/>
				<TextInput
					style={styles.input}
					placeholder='Full Name'
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setUsername(text)}
					value={username}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder='Password'
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder='Confirm Password'
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onRegisterPress()}>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	)
}