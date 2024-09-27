//PhungCanhTuan
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView ,TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
export default function Screen2({navigation}) {
  const [data, setData] = useState([]);
 
  function setMau(i){
    if(i==="Accepting Orders") return('green')
    else return('red')
  }
  function setHinh(i){
    if(i==="Accepting Orders") return require('./assets/Image 178.png');
    else return require('./assets/Image 190.png');
  }
    useEffect(() => {
        fetch('https://65448b555a0b4b04436c7ca5.mockapi.io/cafe')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            })
    }, []);
    console.log(data)
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'flex-start',alignItems:'center',height:50, flexDirection:'row',marginTop:30,marginBottom:30}}>
        <Image source={require('./assets/Button 70.png')} style={{height:40,width:40}}></Image>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>   Shops Near Me                      </Text>
        <Image source={require('./assets/Image 177.png')} style={{height:30,width:30}}></Image>
      </View>
      <ScrollView style={styles.croll}>
            {data.map((item, index) => {
                return(
                   <TouchableOpacity onPress={()=>navigation.navigate('Screen3')} key={index} style={styles.Imagee}>
                     
                    {/* <Image style={{height:'50',width:'100%',borderRadius:10}} source={{uri:item.image}} /> */}
                    <img src={`${item.image}`} style={{height:'30',width:'100%',borderRadius:10}} ></img>
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image source={setHinh(item.status)} style={{height:15,width:15}}></Image>
                    <Text style={{marginRight:50,color:setMau(item.status)}}>{item.status} </Text>
                    <Image source={require('./assets/Image 180.png')} style={{height:15,width:15}}></Image>
                      <Text style={{marginRight:10,color:'red'}}>{item.time}</Text>
                      <Image source={require('./assets/Image 181.png')} style={{height:15,width:15}}></Image>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontSize:12,color:'gray'}}>{item.address}</Text>
                   </TouchableOpacity>
                )
       })}
       </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  Imagee: {
    width: '90%',
    height: '100',
     borderRadius: 10,
    // borderBottomColor: 'blue',
    marginBottom:30,
    marginLeft:30,
    flexDirection:'column'
   
},
croll:{
  
    height:300,
    width:'100%',
    marginBottom:30,
    
},
});
