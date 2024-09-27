//PhungCanhTuan
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
export default function Screen3({navigation}) {
  const [gioHang, setGioHang] = useState([])
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991354/d0wp70g11c3wlbrqwjwk.png",
      name: 'Catimor',
      gia: 9,

    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991353/v0iunpxcud2n3iyjcnaw.png",
      name: 'capuchino',
      gia: 23,
      // soluong: 0,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991354/ib95vkgabtn51m3jntod.png",
      name: 'Original',
      gia: 68,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991353/whs1yulh3fvvsutmwfmi.png",
      name: 'Salt',
      gia: 5,
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991353/qfunldshf8gcgu5duhcy.png",
      name: 'Weasel',
      gia: 20,
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991352/mgc9trcsdcadawvgnxdr.png",
      name: 'Espresso',
      gia: 9,
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dgj9wr0oi/image/upload/v1698991318/qoxvkso5vlmsx8qssfnt.png",
      name: 'Culi',
      gia: 0,
    },
  ])
  function addGioHang(i) {
    console.log(i)
    var tim = 0;
    gioHang?.map((item) => {
      if (item === i) {
        tim = 1;
        item.soluong++;
      }
    })
    if (tim === 0) {
      i.soluong = 1;
      gioHang.push(i)

    }
    setGioHang(gioHang)
   

  }
  return (
    <View style={styles.container}>

      <View style={{ justifyContent: 'flex-start', alignItems: 'center', height: 50, flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
        <Image source={require('./assets/Button 70.png')} style={{ height: 40, width: 40 }}></Image>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>   Drinks                                   </Text>
        <Image source={require('./assets/Image 177.png')} style={{ height: 30, width: 30 }}></Image>
      </View>
      <ScrollView style={{ height: "60%" }}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.Imagee} onPress={() => { addGioHang(item); console.log(gioHang) }}  >

              {/* <Image style={{height:'50',width:'100%',borderRadius:10}} source={{uri:item.image}} /> */}
              <img src={`${item.image}`} style={{ height: '30', width: '100%', borderRadius: 10 }} ></img>

            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('Screen4',{da:gioHang })} style={{ backgroundColor: 'yellow', borderRadius: 5, height: 50, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}> GO TO CARD</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  Imagee: {
    width: '95%',
    height: '100',
    borderRadius: 10,
    // borderBottomColor: 'blue',
    marginBottom: 30,
    marginLeft: 10,
    flexDirection: 'column'

  },
});
