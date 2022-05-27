import { View, Text, KeyboardAvoidingView, StyleSheet,Image,Button, TouchableOpacity, Alert} from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import { TextInput } from 'react-native-paper';
import { auth } from '../FirebaseAuth';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CredentialsContext } from '../components/CredentialsContext';

const RegisterScreen = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repass,setrepass] = useState('')
    const [pin,setpin] = useState('')
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       if (user) {
    //         navigation.replace("HomeScreen")
    //       }
    //     })
    
    //     return unsubscribe
    //   }, [])
    
    const handleSignUp = () => {
      if(pin == '0105' && password == repass){
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
              const user = userCredentials.user;
              Alert.alert(
                  "Thông báo",
                  "Bạn đã đăng ký thành công!",
                  [
                    { text: "OK", onPress: () => console.log('Registered with:', user.email) }
                  ]
                );
                navigation.navigate("LoginScreen", { screen: "LoginScreen" })
          }
          )
          .catch(error => alert(error.message))
        }
        else{
          Alert.alert(
            "Thông báo",
            "Đăng ký không thành công, Vui lòng thử lại!",
            [
              { text: "Thử lại", onPress: () => console.log('Account Registration Failed! ') }
            ]
          );
        }
        persistRegister(user);
      }
      const persistRegister = (credentials) => {
        AsyncStorage.setItem('PBL5', JSON.stringify(credentials))
        .then(()=>{
          setStoredCredentials(credentials);
        })
        .catch((error)=>{
          console.log(error)
        })
      }  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Image
        style={styles.image}
        source={{uri: 'https://i.ibb.co/JpjYNWX/loginpng1.png'}}
        />
      <View>
          <Text style={styles.texttile1}>CONTROL FACE DETECTED</Text>
          <Text style={styles.texttile2}>OPEN DOOR</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          right={<TextInput.Icon name="email" color='#000000' style={styles.icontextinput}/>}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="lock" color='#000000' style={styles.icontextinput}/>}
        />
        <TextInput
          placeholder="Re-Password"
          value={repass}
          onChangeText={text => setrepass(text)}
          style={styles.input}
          secureTextEntry
          right={<TextInput.Icon name="lock" color='#000000' style={styles.icontextinput}/>}
        />
        <TextInput
          placeholder="PIN"
          value={pin}
          onChangeText={text => setpin(text)}
          style={styles.input}
          right={<TextInput.Icon name="lock" color='#000000' style={styles.icontextinput}/>}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c8775d'
    },
    inputContainer: {
        left: 5,
        top: 150,
        
    },
    input: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 7,
      width:300,
      height:30,
      borderColor:'#000000',
      borderWidth:2
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      left: 5,
      top: 140,
      backgroundColor: '#c8775d',
    },
    button: {
      backgroundColor: 'white',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#000000',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
      color: '#000000',
    },
    buttonOutlineText: {
      color: '#000000',
      fontWeight: '700',
      fontSize: 16,
    },
    image: {
        width: 400,
        height: 420,
        left: 0,
        top: 0,
        position: 'absolute',
    },
    texttile1:{
        fontFamily: 'Roboto',
        fontSize:28,
        color:'black',
        lineHeight:34.5,
        top:80,
        alignItems: 'center',
        fontWeight: "bold"
    },
    texttile2:{
        fontFamily: 'Roboto',
        fontSize:64,
        color:'black',
        lineHeight:75,
        top:95,
        alignItems: 'center',
        fontWeight: "bold"
    },
    icontextinput:{
        left: 5,
        top: 8,
    }
  })
