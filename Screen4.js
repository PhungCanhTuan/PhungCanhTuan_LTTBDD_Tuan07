//PhungCanhTuan
import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,ScrollView } from 'react-native';

export default function Screen4({navigation,route}) {
  var [data,setData] = useState([]);
  const [tong,setTong]=useState(0);
  useEffect (()=>{
    var tong2=0
    
    {data.map((item)=>{
     tong2+= item.soluong*item.gia;
     
    } )}

     setTong(tong2);
     console.log(tong2)
    
},[data])
console.log(tong)
  useEffect(() => {
   
    if (route.params && route.params.da) {
      // Kiểm tra xem route.params.link tồn tại và có giá trị
      setData(route.params.da);
     
      // tongTien();
      // console.log(tongTien())
      
    }
    
  },[route.param]);
   
  return (
    <View style={styles.container}>
     <View style={{ justifyContent: 'flex-start', alignItems: 'center', height: 50, flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
        <Image source={require('./assets/Button 70.png')} style={{ height: 40, width: 40 }}></Image>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>   Your orders                                   </Text>
        <Image source={require('./assets/Image 177.png')} style={{ height: 30, width: 30 }}></Image>
      </View>
     
        
      <TouchableOpacity style={{borderRadius:5, height:80,width:'90%',marginTop:10,flexDirection:'row',backgroundColor:'blue',alignItems:'center'}} >
        <View style={{width:'80%',flexDirection:'column',marginLeft:10}}>
              <Text style={{fontStyle:18,fontWeight:'bold'}}>CAFE DELIVERY </Text>
              <Text style={{fontStyle:16,fontWeight:'bold'}}>Order #18 </Text>
        </View>
        <Text style={{fontStyle:20,fontWeight:'bold'}}>5$  </Text>    
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:5, height:80,width:'90%',marginTop:30,flexDirection:'row',backgroundColor:'#F291A3',backgroundColor:'blue',alignItems:'center'}} >
        <View style={{width:'80%',flexDirection:'column',marginLeft:10}}>
              <Text style={{fontStyle:18,fontWeight:'bold'}}>CAFE  </Text>
              <Text style={{fontStyle:16,fontWeight:'bold'}}>Order #18 </Text>
        </View>
        <Text style={{fontStyle:20,fontWeight:'bold'}}>{tong} $ </Text>    
      </TouchableOpacity>

      <ScrollView style={{ height: "40%" ,marginTop:20}}>
        {data?.map((item, index) => {
          return (
          
            <TouchableOpacity key={index} style={styles.Imagee} onPress={() => { addGioHang(item); console.log(gioHang) }}  >
             
              {/* <Image style={{height:'50',width:'100%',borderRadius:10}} source={{uri:item.image}} /> */}
              <img src={`${item.image}`} style={{ height: '30', width: '100%', borderRadius: 10 }} ></img>

            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('Screen4')} style={{ backgroundColor: 'yellow', borderRadius: 5, height: 50, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}> PAY NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems:'center'
   
  },
  Imagee: {
    width: '95%',
    height: '100',
    borderRadius: 10,
    // borderBottomColor: 'blue',
   
    marginLeft: 10,
    marginTop:10,
    flexDirection: 'column'

  },
});
