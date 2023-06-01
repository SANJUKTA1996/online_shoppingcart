import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyProduct from './MyProduct';
import MyCart from '../src/newredux/MyCart';


const Stack = createStackNavigator();

 const  AppNavigation=()=> {
 
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="MyProduct"
            component={MyProduct}
            options={{headerShown: false}}
            />
                <Stack.Screen
            name="MyCart"
            component={MyCart}
            options={{headerShown: false}}
            />
           
        </Stack.Navigator>
    </NavigationContainer>
    )
  }

  export default AppNavigation;