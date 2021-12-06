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
import {Login} from './AuthProvider';
import {GoogleSignIn} from './AuthProvider';

const LogIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={{flex: 1.5, paddingHorizontal: '10%'}}>
        <View style={styles.v1}>
          <Text style={styles.txt}>Login</Text>
        </View>

        <View style={styles.v2}>
          <InputText
            placeholder="Email"
            ico="mail"
            value={email}
            changeText={val => setEmail(val)}
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

          <TouchableOpacity
            // onPress={props.navigation.navigate('Forgot')}
            style={{alignItems: 'flex-end', marginTop: '5%'}}>
            <Text style={{color: 'grey'}}>ForgotPassword?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            Login(email, password);
          }}
          style={{alignItems: 'center', marginTop: '-8%', elevation: 8}}>
          <View style={styles.v3}>
            <Text style={{fontSize: 20,color:"white"}}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:'10%'}}>

        <TouchableOpacity
          onPress={() => {
            GoogleSignIn().then(() => console.log('Signed in with Google!')).catch(error=>{
              console.error(error)
            });
          }}
          style={{alignItems: 'center', elevation: 8}}>
          <View style={styles.v5}>
            <Text style={{fontSize: 20,color:"white"}}>Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {props.navigation.navigate("Signup")
          }}
          style={{alignItems: 'center', elevation: 8}}>
          <View style={styles.v5}>
            <Text style={{fontSize: 20,color:"white"}}>Facebook</Text>
          </View>
        </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {props.navigation.navigate("Otpsignup")
          }}
          style={{alignItems: 'center', elevation: 8}}>
          <View style={styles.v4}>
            <Text style={{fontSize: 20,color:"white"}}>SignUp with phone</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:'10%'}}>
          <Text style={{color:'black',fontSize:15}}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => {props.navigation.navigate("Signup")
          }}>
            <Text style={{fontSize:15}}>Signup</Text>
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
    borderRadius: 10,
  },
  v4: {
    width: width / 2,
    alignItems: 'center',
    backgroundColor: '#F38000',
    padding: '3%',
    borderRadius: 10,
    marginTop:'10%',
  },
  v5: {
    width: width / 3,
    alignItems: 'center',
    backgroundColor: '#F38000',
    padding: '3%',
    borderRadius: 5,
    // marginTop:'10%',
  },
  txt: {
    color: '#F38000',
    fontSize: 33,
    fontWeight: '400',
    // fontFamily:'comic'
  },
});

export default LogIn;
