import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import ModalHistory from './modal/ModalHistory'

const ItemHistory = ({historyData}) => {
    console.log('historyData: ', historyData)
    console.log('----------------------------------------------------------')

    const [isVisibleModal, setVisibleModal] = useState(false)
    return(
        <TouchableOpacity style={[styles.card, {backgroundColor:"#f2f2f2"}]}
            onPress={() => setVisibleModal(!isVisibleModal)}>
            <ModalHistory 
            historyData = {historyData} 
            visible={isVisibleModal}
            handleVisible={setVisibleModal}/>

            <Text style={styles.sub}>{historyData?.time || ''}</Text>
        </TouchableOpacity>
    )
  }
const styles = StyleSheet.create({
    card:{   
        marginTop:10,
        height: 80,
        width: 300,
        marginHorizontal:1,
        marginVertical:1,
        backgroundColor:'#FDA43C',
        borderRadius:10
      },
      sub:{
        fontWeight:'bold',
        fontSize:20,
        flex:1,
        marginTop:25,
        marginLeft:40,
        color:"#000",
      },
})

  export default ItemHistory