import { View, Text,Picker,StyleSheet, FlatList, TouchableOpacity,SafeAreaView } from 'react-native'
import React , {useState,useEffect} from 'react'
import { ActivityIndicator } from 'react-native-paper';


const HistoryPage = () => {
  const [Door,setDoor] = useState('front');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllTime = () => {
    const APIURL = 'https://pbl5.tk/Door/Doors?format=json';
    fetch(APIURL)
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
    return(
      <TouchableOpacity style={[styles.card, {backgroundColor:"#96D6E6"}]}>
      <View style={styles.cardFooter}>
        <Text style={styles.sub}>{item.time}</Text>
      </View>
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
          numColumns={2}
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
    width:30,
    height:2,
    marginTop:200,
    alignItems: 'center',
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
    borderWidth:60,
    borderColor: '#000000',
    borderRadius: 10,
    color:'black'
  },
  list:{
    backgroundColor:"#E6E6E6",
    
  },
  listContainer:{
    alignItems:'center',
  },
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
    backgroundColor:'#E6E6E6',
    
  },
  cardImage:{
    height: 150,
    width: 150,
    alignSelf:'center',
    marginTop:15

  },
  sub:{
    fontWeight:'bold',
    fontSize:15,
    flex:1,
    marginTop:5,
    marginLeft:20,
    color:"#000",
  },
  sub1:{
    fontSize:12,
    flex:1,
    marginLeft:20,
    color:"#000",
  },
  title:{
    textAlign:"center",
    fontSize:20,
    backgroundColor:"#E6E6E6"
  },
  react:{
    alignItems: "center",
    marginBottom:5,
    marginTop:5
  }
})
export default HistoryPage