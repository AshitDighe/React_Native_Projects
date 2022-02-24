import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../Components/SignIn';
import Signup from '../Components/Signup';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="signin" component={SignIn}/>
            <Screen name="signup" component={Signup}/>
        </Navigator>
    )
} 

export default AuthStack;