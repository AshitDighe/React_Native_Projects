import React, { FC } from 'react';
import {Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native'
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// const {height, width} = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;
}

const App : FC <Props> = (props) => {
    return (
       <TouchableOpacity style={styles.container} onPress={props.onPress}>
           <Text style={styles.text}>{props.title}</Text>
       </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        width:300,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10
        
    }, 
    text: {
        color: '#fff'
    }
})