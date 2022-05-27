import { View,Text,StyleSheet,SafeAreaView,TouchableOpacity, ImageBackground,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const navigation = useNavigation()


  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.container}
    source = {{uri: 'https://i.ibb.co/JpjYNWX/loginpng1.png'}}>
      <Text style={styles.title}>MY HOME</Text>
      <Text style={styles.doortitle}>Door
      <Icon name="door-open" size={30} style={styles.icondoor}/></Text>
      <TouchableOpacity
          style={styles.door1}
          onPress ={() => navigation.navigate('Control')}
        >
          <Text style={styles.buttonText}>Front</Text>
        </TouchableOpacity>
        <View style={styles.device}>
          <View style={styles.viewdevice}>
          <Image source={{uri: 'https://i.ibb.co/7tFbtbx/camera-icon-3d-22-1.png'}}
            style={styles.imagedevice}></Image>
            </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  title:{
    position: 'absolute',
    top: 60,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:"bold",
    fontSize:30,
    color:'#ffff',
    
  },
  doortitle:{
    position: 'absolute',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 250,
    fontFamily:'Roboto',
    fontStyle:'italic',
    fontSize:30,
    color: '#FFFFFF',
    paddingRight:20,
  },
  door1:{
    backgroundColor: '#FFFFFF',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    padding: 40,
    top:30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText:{
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontWeight:"bold",
    fontSize:25,
    color:'#FDA43C',
  },
  imgbackground:{
    flex: 1,
    justifyContent: "center"
  },
  icondoor:{
    padding:20,
  },
  device:{
    top:"30%",
    width:'80%',
    left:"25%",
    height:65,
    borderRadius:20,
    backgroundColor:'#FFFFFF',
  },
  viewdevice:{
    width:55,
    height:55,
    // padding:25,
    top:7,
    left:20,
    borderRadius:30,
    backgroundColor:'#FDA43C'
  },
  imagedevice:{
    width:40,
    height:40,
    padding:25,
  }
})