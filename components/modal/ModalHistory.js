import { View, Text,Image,Animated, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React , {useState,useEffect} from 'react'

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
                style={{height: 30, width: 30, bottom:10}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: Image_recognize_main}}
            style={{height: 300, width: 300, marginVertical: 10}}
          />
        </View>
  
        <Text style={styles.text}>
          {time}
        </Text>
        <Text style={styles.text}>
          {user}
        </Text>
        <Text style={styles.text}>
          {id}
        </Text>
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
      backgroundColor: '#FDA43C',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      height:'90%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    text: {
        marginVertical: 30,
         fontSize: 20,
          textAlign: 'center'
    }
    
  })

export default ModalHistory