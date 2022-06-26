import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import ModalHistory from './modal/ModalHistory'

const ItemHistory = ({historyData}) => {

    const [isVisibleModal, setVisibleModal] = useState(false)
    return(
        <TouchableOpacity style={historyData.user == 'unknown' ? [styles.card, {backgroundColor:"#d90429"}]:[styles.card, {backgroundColor:"#00b200"}]}
            onPress={() => setVisibleModal(!isVisibleModal)}>
            <ModalHistory 
            historyData = {historyData} 
            visible={isVisibleModal}
            handleVisible={setVisibleModal}/>
            <View style={styles.viewid} >
            <Text style={styles.sub1}>{historyData?.id || ''}</Text>
            </View>
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
        alignSelf:'center',
        color:"#000",
      },
      sub1:{
        fontWeight:'bold',
        fontSize:15,
        flex:1,
        alignSelf:'center',
        color:"#000",
      },
      viewid:{
        marginVertical:10,
        flex:0.5,
        borderRadius:150,
        borderColor:'#FDA43C',
        alignSelf:'center',
        borderWidth:2.4,

      }
})

  export default ItemHistory