import { View, Text, Switch, SafeAreaView, StyleSheet, Picker} from 'react-native'
import React, {useState} from 'react'
import { WebView } from 'react-native-webview';



const ControlScreen = () => {
  const [Door,setDoor] = useState('front'); 
  const [switchVal, setSwitchVal] = useState(false);


  return (
    <View style={styles.container}>
      {/* <Picker
          style={styles.picker}
          selectValue={Door}
          onValueChange={(itemDoor) => setDoor(itemDoor)} 
      >
          <Picker.Item label='Front' value='Front'/>
          <Picker.Item label='Back' value='Back'/>
      </Picker>

      <Text style={styles.text}>
        {switchVal ? 'Door OPEN' : 'Door CLOSE'}
      </Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={switchVal ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setSwitchVal((preVal) => !preVal)}
        value={switchVal}
      /> */}
      <WebView
        style={{flex: 1}}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{ top: 0, right: 0, left: 0, bottom: 0 }}
        scrollEnabled={false}
        source={{ uri: 'https://e2af-2402-800-629c-2c9b-5092-346c-80d4-ab3.ap.ngrok.io/' }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: "center",
      // justifyContent: "center"
    },
    picker: {
      top: -200,
      alignItems: 'center',
      marginHorizontal:1,
      marginVertical:1,
      flexBasis: '48%',
      borderWidth:60,
      borderRadius: 10,
      color:'black'
    },
    switch:{  
      marginHorizontal:1,
      marginVertical:1,
      top:-300
    },
    text:{
      top:-300
    },
    video:{
      width:400,
      height:400
    }
})


export default ControlScreen