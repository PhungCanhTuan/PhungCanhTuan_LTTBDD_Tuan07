//PhungCanhTuan
import { useScrollToTop } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';

export default function Screen1({navigation}) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://65448b555a0b4b04436c7ca5.mockapi.io/image')
            .then((response) => response.json())
            .then((json) => {
                setData(json)

            })
    }, []);
    console.log(data)
    return (
       
 
        <View style={styles.container}>
             
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 80, marginBottom: 80 }}>Welcome to Cafe world!</Text>
            <ScrollView style={styles.croll}>
            {data.map((item, index) => {
                return(
                   <TouchableOpacity  key={index} style={styles.Imagee} onPress={()=>navigation.navigate('Screen3')} >
                     
                    {/* <Image style={styles.Imagee} source={{uri:item.image}} /> */}
                    <img src={`${item.image}`} ></img>
                  
                   </TouchableOpacity>
                )
       })}
       </ScrollView>
      
       
       
       
       

            <TouchableOpacity onPress={()=>navigation.navigate('Screen2')} style={{ backgroundColor: 'blue', borderRadius: 10, width: '80%', height: 60, alignItems: 'center', justifyContent: 'center', marginBottom: 50 }}>
                <a style={{ fontSize: 16, color: 'white' }}> GET STARTED</a>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         
        alignItems: 'center'

    },
    Imagee: {
        width: '70%',
        height: '125',
         borderRadius: 10,
        // borderBottomColor: 'blue',
        marginTop:20,
        marginLeft:70
       
    },
    croll:{
      
        height:200,
        width:'100%',
        marginBottom:50,
    },
});
