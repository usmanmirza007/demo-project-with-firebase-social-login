import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {sendOtp, confirmCode} from './AuthProvider';

// service
// import {Auth} from '../services'

const OtpSignUp = props => {
  const [number, setNumber] = useState();
  const [code, setCode] = useState();

  const [confirm, setConfirm] = useState(null); //if null means no otp message send


  const _sendOtp = () => {
    sendOtp(number).then(confirmation => setConfirm(confirmation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup with OTP</Text>

      <TextInput
        placeholder="Enter Number"
        value={number}
        onChangeText={e => setNumber(e)}
        placeholderTextColor={'black'}
        // keyboardType='numeric'
        style={{borderWidth: 1, width: '70%', color: 'black'}}
      />

      <Button
        title="send Otp"
        onPress={() => {_sendOtp(number);
        }}
      />


      <TextInput
        placeholder="Enter OTP"
        value={code}
        onChangeText={e => setCode(e)}
        placeholderTextColor={'black'}
        maxLength={6}
        style={{borderWidth: 1, width: '70%', color: 'black'}}
      />
      <Button
        title="Confirm Otp"
        onPress={() => confirmCode(confirm, code)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',

    // justifyContent: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: 'black',
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default OtpSignUp;
