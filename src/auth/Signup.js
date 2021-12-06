import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import InputText from '../components/InputText';
const {height, width} = Dimensions.get('window');
import { Signup } from './AuthProvider';

const SignUp = (props) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [changePass, setChangePass] = useState();


  return (
    <View style={styles.container}>
      <View style={{flex: 1.5, paddingHorizontal: '10%'}}>
        <View style={styles.v1}>
          <Text style={styles.txt}>Signup</Text>
        </View>
        

        <View style={styles.v2}>
        <InputText
            placeholder="UserName"
            ico="mail"
            value={userName}
            changeText={(val) => 
              setUserName(val)
            }

          />
          <InputText
            placeholder="Email"
            ico="mail"
            value={email}
            changeText={(val) => 
              setEmail(val)
            }

          />
          <InputText
            placeholder="Password"
            secure={true}
            ico="key"
            value={password}
            changeText={val => {
              setPassword(val);
            }}
          />
          <InputText
            placeholder="Confirm Password"
            secure={true}
            ico="key"
            value={changePass}
            changeText={val => {
              setChangePass(val);
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            Signup(userName,email, password);
          }}
          style={{alignItems: 'center', marginTop: '-8%', elevation: 8}}>
          <View style={styles.v3}>
            <Text style={{fontSize: 20}}>Signup</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:'10%'}}>
          <Text style={{color:'black',fontSize:15}}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => {props.navigation.navigate("Login")
          }}>
            <Text style={{fontSize:15}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('../assets/images/272.png')}
        resizeMode="cover"
        style={styles.img}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 2.5,
    zIndex: -1,
  },
  v1: {
    height: height / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v2: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    paddingBottom: '30%',
    elevation: 8,
  },

  v3: {
    width: width / 3,
    alignItems: 'center',
    backgroundColor: '#F38000',
    padding: '3%',
    borderRadius: 25,
  },
  txt: {
    color: '#F38000',
    fontSize: 33,
    fontWeight: '400',
  },
});

export default SignUp;
