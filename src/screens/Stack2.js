import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Movies from './Movies';
import SignOut from './SignOut';
import RealTime from './RealTime';

const Stack = createNativeStackNavigator();

const Stack2 = () => {
    return(   
        <Stack.Navigator initialRouteName="Logout" >
            <Stack.Screen name="Logout" component={SignOut} options={{headerShown: false}}/>
            <Stack.Screen name="Movies" component={Movies} options={{headerShown: false}}/>
            <Stack.Screen name="RealTime" component={RealTime} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}
export default Stack2;