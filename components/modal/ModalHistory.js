import { View, Text,Image,Animated, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React , {useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const icondatetime = '././assets/icondatetime.png'
const ModalHistory = ({historyData, visible, handleVisible}) => {
    console.log('historyData ModalHistory: ', historyData)
    const {time = '', user = '', id = '', Image_recognize_main = ''} = historyData || {}
    return (
        <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => handleVisible(false)}>
              <Image
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/2048px-OOjs_UI_icon_close.svg.png'}}
                style={{height: 40, width: 40,}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textid}> 
          {id}
        </Text>
        <View style={{marginTop:-20,alignItems: 'center', borderColor:'#FDA43C', borderWidth:8,borderRadius:30}}>
          <Image
            source={{uri: Image_recognize_main}}
            style={{height: 300, width: 300, borderRadius:20}}
          />
        </View>
        <View style={styles.header1}>
        <Image
                source={{uri:"https://img.icons8.com/officel/344/user.png"}}
                style={styles.icondatetime}
              />
        <Text style={styles.text}>
          {user}
        </Text>
        </View>
        <View style={styles.header1}>
        <Image
                source={{uri:"https://img.icons8.com/plasticine/344/overtime.png"}}
                style={styles.icondatetime}
              />
        <Text style={styles.text}>
          {time}
        </Text>
        </View>
      </ModalPoup>
    )
}

const ModalPoup = ({visible, children}) =>{
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
      toggleModal();
    }, [visible]);
  
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
  };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#FDA43C",
    },
    picker: {
      width:50,
      height:10,
      alignItems: 'center',
      marginHorizontal:1,
      marginVertical:1,
      flexBasis: '48%',
      borderWidth:70,
      borderRadius: 10,
      color:'black'
    },
    list:{
      backgroundColor:"#FDA43C",
      
    },
    listContainer:{
      alignItems:'center',
      backgroundColor:"#FDA43C",
    },
    sub:{
      fontWeight:'bold',
      fontSize:20,
      flex:1,
      marginTop:25,
      marginLeft:40,
      color:"#000",
    },
    modalBackGround: {
      flex: 1,
      // backgroundColor: '#FDA43C',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      height:'80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      top:10,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    text: {
        marginVertical:25,
        fontSize: 25,
        textAlign: 'center',
        color: '#FDA43C',
        fontWeight: 'bold'
    },
    textid:{
      bottom:50,
      fontSize: 30,
      textAlign: 'center',
      color: '#FDA43C',
      fontWeight: 'bold'
    },
    icondatetime:{
      height:40,
      width:40,
      marginBottom:-20,
    },
    header1:{
      alignItems: 'center',
      padding:5,
    }
    
  })

export default ModalHistory