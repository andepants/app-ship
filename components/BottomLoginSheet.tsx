import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { defaultStyles } from '@/constants/Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {ColorPalette} from '@/constants/Colors'
import { Link } from 'expo-router'

const BottomLoginSheet = () => {

  const { bottom }  = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      {/* <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
        <Ionicons name="logo-apple" size={14} style={styles.btnIcon} />
        <Text style={styles.btnLightText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
        <Ionicons name="logo-google" size={16} style={styles.btnIcon} color={'#fff'}/>
        <Text style={styles.btnDarkText}>Continue with Google</Text>
      </TouchableOpacity> */}
      <Link href={{
        pathname: '/login',
        params: {
          type: 'register',
        }
      }} asChild style={[defaultStyles.btn, styles.btnDark]}>
        <TouchableOpacity>
          <Ionicons name="mail" size={20} style={styles.btnIcon} color={ColorPalette.light}/>
          <Text style={styles.btnDarkText}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>
      <Link href={{
        pathname: '/login',
        params: {
          type: 'login',
        }
      }} asChild style={[defaultStyles.btn, styles.btnDark]}>
        <TouchableOpacity>
          <Text style={styles.btnDarkText}>Log in</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    padding: 26,
    gap: 14,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  btnLight: {
    backgroundColor: '#fff',
  },
  btnIcon: {
    paddingRight: 7,
  },
  btnLightText: {
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: ColorPalette.grey,
  },
  btnDarkText: {
    color: '#fff',
    fontSize: 20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: ColorPalette.grey,
  }
})

export default BottomLoginSheet