import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity, } from 'react-native';
import Button from '../Form/Button';
import Input from '../Form/FormInput';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Signup from '../Signup';

const SignIn = (props:any) => {
    const navigationRef=useNavigationContainerRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
       
    }
    
  return (
    <View style={styles.container}>
         <Text style={{fontSize: 25, marginVertical: 10}}>Login Screen</Text>
    <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
    <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
    <Button title="Sign In"  onPress={login} />
    <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
         <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style={{marginHorizontal: 5}}>
         <Text style={{color: 'rgba(81,135,200,1)'}} >Sign Up Here</Text>
        </TouchableOpacity>
     </View>
    </View>

   
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20,

    }
})