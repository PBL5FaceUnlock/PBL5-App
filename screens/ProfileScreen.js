import { View, Text ,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../FirebaseAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CredentialsContext } from '../components/CredentialsContext';

const ProfileScreen = () => {
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const navigation = useNavigation()
  const handleSignOut = () => {
    AsyncStorage.removeItem('PBL5')
    .then(() =>{
      setStoredCredentials('')
      auth
      .signOut()
      .then(() => {
      })
      .catch(error => alert(error.message))
      navigation.replace("LoginScreen")
    })
    .catch(error => console.log(error))

  }
  



  return (
    <View style={styles.container}>
    <ImageBackground style={styles.container}
                    source = {{uri: 'https://i.ibb.co/JpjYNWX/loginpng1.png'}}>
      <Text style={styles.emailshow}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
   button: {
    backgroundColor: '#FDA43C',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emailshow:{
    alignSelf:'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
})