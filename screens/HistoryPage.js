import { Picker,StyleSheet, FlatList,SafeAreaView, RefreshControl } from 'react-native'
import React , {useState,useEffect} from 'react'
import { ActivityIndicator } from 'react-native-paper';
import ItemHistory from '../components/ItemHistory';

const APIURL = 'http://171.251.17.171/Image_To_Android/?format=json';

const HistoryPage = () => {
  const [Door,setDoor] = useState('front');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataAllTime = async () => {
    try{
      setIsLoading(true)
      const response = await fetch(APIURL)
      const result = await response.json()
      setData(result)
    }catch(e){
       console.log("Error on fetchDataAllTime: ", e)
    }finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataAllTime();
  }, [])

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
      {isLoading ? <ActivityIndicator/>:(
        <FlatList
          style={styles.list} 
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          renderItem={({item}) => <ItemHistory historyData={item}/>}
          keyExtractor={item => `key-${item.id}`}
          refreshControl={
          <RefreshControl
              refreshing={isLoading}
                onRefresh={fetchDataAllTime}
              />
             }
        />
      )}
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
    width:50,
    height:10,
    alignItems: 'center',
    marginHorizontal:1,
    marginVertical:1,
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
    flex: 1
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
  
})
export default HistoryPage