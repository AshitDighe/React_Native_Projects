import React, { FC, useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './appstack';
import AuthStack from './authstack';

const user=false;

const MainNav=() => {
    return (
        <NavigationContainer independent={true}>
            {/* {user !== false ? <AppStack /> : <AuthStack />} */}
            {/* <AppStack/> */}
            <AuthStack />
        </NavigationContainer>
    )
}

export default MainNav;