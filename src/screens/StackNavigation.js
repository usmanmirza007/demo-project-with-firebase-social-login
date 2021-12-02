import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Login';
import SignUp from './Signup';
import OtpSignUp from './OtpSignup'


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(   
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={LogIn} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="Otpsignup" component={OtpSignUp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;