import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../auth/Login';
import SignUp from '../auth/Signup';
import OtpSignUp from '../auth/OtpSignup';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otpsignup"
        component={OtpSignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
