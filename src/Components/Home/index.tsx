import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StyleSheet, useWindowDimensions, View} from 'react-native';
import Info from '../Info';
import Batches from '../Batches';
import Courses from '../Courses';
import Signup from '../Signup';
import SignIn from '../SignIn';
const renderScene = SceneMap({
    info:Info,
    batches:Batches,
    courses:Courses,
    signup: Signup,
    signin: SignIn,
});
const Home=()=> {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'info', title: 'Info' },
    { key: 'batches', title: 'Batches' },  
    { key: 'courses', title: 'Courses' },
    { key: 'signup', title: 'Signup' },
    { key: 'signin', title: 'SignIn' },  
  ]);
    return (    
        <View style={styles.headerContainer}>
            <TabView
                 navigationState={{ index, routes }}
                 renderScene={renderScene}
                 onIndexChange={setIndex}
                 initialLayout={{ width: layout.width }}
           />
           </View>
    );
  }
  const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      marginBottom: 20,
      width: '100%',
    //   paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default Home;  