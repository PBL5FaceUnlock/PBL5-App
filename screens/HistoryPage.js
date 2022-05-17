import { View, Text,Picker,StyleSheet, FlatList, TouchableOpacity,SafeAreaView, RefreshControl, ScrollView } from 'react-native'
import React , {useState,useEffect,useCallback} from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const HistoryPage = () => {
  const [Door,setDoor] = useState('front');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation()

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    wait(200)
    .then(() => setRefreshing(false))
    .finally(getAllTime)
  }, []);


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
      <TouchableOpacity style={[styles.card, {backgroundColor:"#f2f2f2"}]}>
          <Text style={styles.sub}>{item.time}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.ScrollView}
      contentContainerStyle={styles.scrollView}
      refreshControl={
      <RefreshControl
          refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }>
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

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FDA43C",
  },
  picker: {
    width:60,
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
    flex:2,
    marginTop:25,
    marginLeft:40,
    color:"#000",
  },
  card:{
    marginTop:10,
    height: 80,
    width: 300,
    marginHorizontal:1,
    marginVertical:1,
    backgroundColor:'#FDA43C',
    borderRadius:10
  },
  
})
export default HistoryPage