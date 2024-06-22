import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { defaultStyles } from '../constants/Styles'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';


const Page = () => {
  const { type } = useLocalSearchParams<{type: string}>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)')
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
    setLoading(false)
  }

  const signUp = async () => {
    setLoading(true)
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) router.replace('/(tabs)')
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size='large' color='#fff'/>
        </View>
      )}
      {/* <Image style={styles.logo} source={require('../assets/images/logo-white.png')} /> */}

      <Text style={styles.title}>
        {type === 'login' ? 'Welcome back' : 'Create your account'}
      </Text>

      <View style={{marginBottom: 20 }}>
        <TextInput
          autoCapitalize='none'
          placeholder='Email'
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          autoCapitalize='none'
          placeholder='Password'
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {type === 'login' ? (
        <TouchableOpacity onPress={signIn} style={[defaultStyles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={signUp} style={[defaultStyles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Create acount</Text>
        </TouchableOpacity>
      )}

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
  },
  btnPrimary: {
    backgroundColor: "#007bff",
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
  }
})

export default Page;