import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MY HOME</Text>
      <Text style={styles.doortitle}>Door</Text>
      <TouchableOpacity
          style={styles.door1}
        >
          <Text style={styles.buttonText}>Front</Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={styles.door2}
        >
          <Text style={styles.buttonText}>After</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDA43C'
  },

  title:{
    position: 'absolute',
    width: 115,
    height: 29,
    top: 43,
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:"bold",
    fontSize:25,
    lineHeight:29,
    color:'#FFFFFF',
  },
  doortitle:{
    position: 'absolute',
    width: 75,
    height: 41,
    top: 200,
    left: 171,
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontSize:20,
    color: '#FFFFFF',
  },
  door1:{
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  door2:{
    marginTop:10,
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText:{
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:"bold",
    fontSize:25,
    color:'#FDA43C',
  }
})