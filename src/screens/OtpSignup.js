import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {sendOtp, confirmCode} from './AuthProvider';

// service
// import {Auth} from '../services'

const OtpSignUp = props => {
  // const [ codeArr, setCodeArr ]= useState([])
  const [number, setNumber] = useState();
  const [code, setCode] = useState();
  // const code = codeArr.join("")
  const [confirm, setConfirm] = useState(null); //if null means no otp message send

  // handleCode = (e, index) => {
  //     const codeArray = [...code]
  //     codeArray[index] = e
  //     setCodeArr(codeArray)
  // }

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
      {/* {console.log(number)} */}

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

      {/* <Input
                placeholder= "Enter Number"
                value={number}
                onChangeText={e => setNumber(e)}
            />

            <Button
                buttonText= "Send OTP"
                onPress={() => _sendOtp(number)}
            />

            <OtpInput 
                onChangeText={ (e, index) => handleCode(e, index)}
                value= {codeArr}
                noOfInput = {6}
            />

            <Button
                buttonText= "Verify"
                onPress={() => Auth.confirmCode(confirm, code)}
            />

            <TextButton 
                text="Back to Login"
                onPress={() => navigation.navigate('Login')}
            /> */}
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
