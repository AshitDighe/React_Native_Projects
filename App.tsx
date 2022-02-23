import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/Components/BottomTab';
import Home from './src/Components/Home';
import SignIn from './src/Components/SignIn';
import Signup from './src/Components/Signup';
 const App=()=> {
   const Tab = createBottomTabNavigator();
   const islogin =false;
  return (
 <View style={styles.container}>
   <NavigationContainer>
      {/* <Home/> */}
      
    <BottomTab/>
    </NavigationContainer>
</View>
     

  );
}
export default App;
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     // alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
