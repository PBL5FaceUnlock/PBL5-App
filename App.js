
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import BottomTab from './navigation/BottomTab'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CredentialsContext } from './components/CredentialsContext';
console.disableYellowBox = true;
const Stack = createNativeStackNavigator();

const App = () =>{
  const [AppReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');

  const checkLoginCredentials = () =>{
    AsyncStorage.getItem('PBL5')
    .then((result)=>{
      if(result !== null){
        setStoredCredentials(JSON.parse(result));
      }
      else{
        setStoredCredentials(null);
      }
    })
    .catch(error => console.log(error))
  }

  if(!AppReady){
    return(
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <CredentialsContext.Provider value={{storedCredentials,setStoredCredentials}}>
      <CredentialsContext.Consumer>
        {({storedCredentials})=> (
      <NavigationContainer>
        <Stack.Navigator>
        {storedCredentials ? (
          <Stack.Screen options = {{headerShown: false}} name="BottomTab" component={BottomTab} />)
          :(<>
          <Stack.Screen options = {{headerShown: false}} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options = {{headerShown: false}} name="BottomTab" component={BottomTab} />
          <Stack.Screen options = {{headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen options = {{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options = {{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
          </>)
        }

        </Stack.Navigator>
      </NavigationContainer>
        )}
      </CredentialsContext.Consumer>
    </CredentialsContext.Provider>
  );
}

export default App
