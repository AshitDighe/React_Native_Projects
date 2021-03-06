import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Input from '../Form/FormInput';
import Button from '../Form/Button';
import firebase from 'firebase/compat/app'
// import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';
const Signup  = (props:any) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup =async() => {
        if(name && email && password){
            try{
                const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

           if(user) {
                 await firebase.firestore().collection('users').doc(user.uid).set({name, email, password});
             }

            } catch (error) {
                console.log(error);
                
            }

        } else {
            Alert.alert(`Error`, `Missing Fields`);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, marginVertical: 10,paddingTop:45}}>Sign Up Screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)} />
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Sign Up" onPress={signup} />
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signin')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})