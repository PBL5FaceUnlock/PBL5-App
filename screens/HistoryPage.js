import { View, Text,Picker,StyleSheet, FlatList, TouchableOpacity,SafeAreaView } from 'react-native'
import React , {useState,useEffect} from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


const HistoryPage = () => {
  const [Door,setDoor] = useState('front');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation()

  const getAllTime = async () => {
    const APIURL = 'http://171.251.17.171/Door/Doors?format=json';
    await fetch(APIURL)
    .then((res) => res.json())
    .then((resJson) => {
      setData(resJson)
    }).catch((error) => {
        console.log("Error: ", error)
    }).finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getAllTime();
    return () => {
      
    }
  }, [])


  const renderTime = ({item,index}) => {
    console.log(item.time)
    return(
      <TouchableOpacity style={[styles.card, {backgroundColor:"#FDA43C"}]}>
          <Text style={styles.sub}>{item.time}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectValue={Door}
        onValueChange={(itemDoor) => setDoor(itemDoor)} 
      >
        <Picker.Item label='Front' value='Front'/>
        <Picker.Item label='Back' value='Back'/>
      </Picker>
      {isLoading ? <ActivityIndicator/>:(
      <SafeAreaView>
        <FlatList
          style={styles.list} 
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          renderItem={renderTime}
          keyExtractor={item => `key-${item.name}`}
        />
      </SafeAreaView>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    top: 100,
    alignItems: 'center',
    marginHorizontal:1,
    marginVertical:1,
    flexBasis: '48%',
    borderWidth:60,
    borderRadius: 10,
    color:'black'
  },
  list:{
    backgroundColor:"#f2f2f2",
    
  },
  listContainer:{
    alignItems:'center',
  },
  sub:{
    fontWeight:'bold',
    fontSize:20,
    flex:2,
    marginTop:25,
    marginLeft:40,
    color:"#000",
  },
  card:{
    marginTop:10,
    height: 80,
    width: 300,
    marginHorizontal:2,
    marginVertical:2,
    backgroundColor:'#f2f2f2',
    borderRadius:10
  },
})
export default HistoryPage