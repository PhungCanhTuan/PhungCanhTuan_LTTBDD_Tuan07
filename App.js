//PhungCanhTuan
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen4 from './Screen4';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //   {/* <Screen1></Screen1> */}
    //   {/* <Screen2></Screen2> */}
    //   <Screen3></Screen3>
    // </View>
    // <NavigationContainer>
    // //       <Stack.Navigator initialRouteName='Home'screenOptions={{headerShown:false}}>
    // //       <Stack.Screen
    //           name='Screen3a'
    //           component={Screen3a}
    //         />
    //         <Stack.Screen
    //           name='Screen3b'
    //           component={Screen3b} 
    //         />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' options={{headerShown:false}}>
        <stack.Screen name = 'Screen1' component={Screen1}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen2' component={Screen2}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen3' component={Screen3}  options={{ headerShown: false }}/>
        <stack.Screen name = 'Screen4' component={Screen4}  options={{ headerShown: false }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
