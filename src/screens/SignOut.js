import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { Logout } from '../auth/AuthProvider';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignOut = props => {
  const [info, setInfo] = useState(null);

  const user = auth().currentUser;
  const userid = user.uid;
  // console.log(user);
  // console.log(userid);
  // console.log(info);
  // console.log(info.UserName)

  const GetData = () => {
    database()
      .ref(`/signup/info/${userid}`)
      .on('value', snapshot => {
        // console.log('User data: ', snapshot.val());
        setInfo(snapshot.val());
      });
  };

  return (
    <View>
      <Text style={{fontSize: 30, color: 'black'}}>SignOut</Text>
      <Button
        title="SignOut"
        onPress={() => {
          Logout();
        }}
      />

      <Text style={{fontSize: 30, color: 'black'}}>move to movies section</Text>

      <Button
        title="Movies"
        onPress={() => {
          props.navigation.navigate('Movies');
        }}
      />

      <Text style={{fontSize: 30, color: 'black'}}>move to RealTime</Text>

      <Button
        title="RealTime"
        onPress={() => {
          props.navigation.navigate('RealTime');
        }}
      />

      <Text style={{fontSize: 30, color: 'black'}}>Get User Data</Text>

      <Button
        title="Get"
        onPress={() => {
          GetData();
        }}
      />

      {info !== null ? (
        <View>
          <Text style={{color: 'black'}}>{info.UserName}</Text>
          <Text style={{color: 'black'}}>{info.Email}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SignOut;
