import { View, Text, Switch, SafeAreaView,RefreshControl, ImageBackground,StyleSheet} from 'react-native'
import React, {useState, useEffect,useContext,useRef} from 'react'
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native-paper';
import { CredentialsContext } from '../components/CredentialsContext';


  const APIDoorURL = 'http://192.168.121.61:8090/Door/Doors?format=json'
  const APIControlURL = 'http://192.168.121.61:8090/Door/Command_to_ESP'


  const ControlScreen = () => {
    const [switchVal, setSwitchVal] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    setTimeout(() => {setSwitchVal(false)}, 10000);
    const fetchStatusDoor = async () => {
      try{
        const response = await fetch(APIDoorURL)
        const result = await response.json()
        setData(result)
      }catch(e){
        console.log("Error on fetchStatusDoor: ", e)
      }
    }
    const handleControlDoor = async () => {
      setIsLoading(true)
      setSwitchVal((switchVal) => !switchVal)
      if(!switchVal)
      {
        await fetch(APIControlURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "value":"true"
          })
      })

          .then((response) => response.json())
          .then((responseData) => {
              console.log(
                  "POST Response",
                  "Response Body -> " + JSON.stringify(responseData)
              )
          })
          .catch(error => alert(error.message))
          .finally(()=>{
            setIsLoading(false)
          })
          .done();
      }
      else
      {
        await fetch(APIControlURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "value":"false"
          })
      })

          .then((response) => response.json())
          .then((responseData) => {
              console.log(
                  "POST Response",
                  "Response Body -> " + JSON.stringify(responseData)
              )
          })
          .catch(error => alert(error.message))
          .done();
      }
    }
    useEffect(() => {
    }, [])
    
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.container}
                      source = {{uri: 'https://i.ibb.co/JpjYNWX/loginpng1.png'}}
    >
    <View>
      <View style={styles.switchcontainer}
      >
      <Text style={styles.text}>
        {(switchVal) ? 'Door OPEN' : 'Door CLOSE'}
      </Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={switchVal ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleControlDoor}
        value={switchVal}
      />
      </View>
      </View>
      <View style={styles.containerwebview}>
      <WebView
        style={{flex: 1,}}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{ top: 0, right: 0, left: 0, bottom: 0,}}
        source={{ uri: 'http://192.168.121.32/' }} />
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: "center",
      // justifyContent: "center"
    },
    switch:{  
      alignSelf: 'center',
    },
    text:{
      alignSelf: 'center',
    },
    containerwebview:{
      borderWidth:5,
      borderRadius:5,
      borderColor:'#FDA43C',
      width:'80%',
      height:'50%',
      marginTop:80,
      alignSelf:'center',
    },
    switchcontainer:{
      marginTop:200,
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical:10,
      borderWidth:3,
      borderColor:'#000',
      borderRadius:20,
      backgroundColor: '#FDA43C',
      width:150,
      height:80,
    },
    loading: {
      marginTop:"60%"
    }
})


export default ControlScreen