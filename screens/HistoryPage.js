import { Picker,StyleSheet, FlatList,SafeAreaView,ImageBackground, RefreshControl,View } from 'react-native'
import React , {useState,useEffect} from 'react'
import { ActivityIndicator } from 'react-native-paper';
import ItemHistory from '../components/ItemHistory';

const APIURL = 'http://171.225.184.216/Image_To_Android/?format=json';

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
        <ImageBackground style={styles.container}
                    source = {{uri: 'https://i.ibb.co/JpjYNWX/loginpng1.png'}}>
    <View style={styles.pickercontainer}>
      <Picker
        style={styles.picker}
        selectValue={Door}
        onValueChange={(itemDoor) => setDoor(itemDoor)} 
      >
        <Picker.Item label='Front' value='Front'/>
        <Picker.Item label='Back' value='Back'/>
      </Picker>
      </View>
      {isLoading ? <ActivityIndicator style={styles.loading}/>:(
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
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:"#FDA43C",
  },
  picker: {
    marginVertical:-38,
    borderWidth:70,
    width:0,
    color:'black'
  },
  list:{
    backgroundColor:"#FDA43C",
    alignSelf:'center',
    
  },
  listContainer:{
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:"#FDA43C",
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
  pickercontainer:{
    marginTop:50,
    borderWidth:3,
    borderColor:'#000',
    borderRadius:15,
    width:140,
    height:30,
    alignSelf:'center',
    flexBasis:'10%',
    backgroundColor:'#FDA43C'
  },
  loading:{
    top:20,
  }
  
})
export default HistoryPage