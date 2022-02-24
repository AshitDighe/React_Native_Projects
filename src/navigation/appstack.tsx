import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Components/Home';
import BottomTab from '../Components/BottomTab';

const {Navigator, Screen} = createStackNavigator();

const AppStack= () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="bottomtab" component={BottomTab}/>
        </Navigator>
    )
} 

export default AppStack;