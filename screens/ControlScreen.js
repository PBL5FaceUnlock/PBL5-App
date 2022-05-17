import { View, Text, Switch, SafeAreaView, StyleSheet, Picker} from 'react-native'
import React, {useState,useEffect} from 'react'

const ControlScreen = () => {
  const [Door,setDoor] = useState('front');
  const [switchVal, setSwitchVal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Picker
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
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
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
    }
})


export default ControlScreen