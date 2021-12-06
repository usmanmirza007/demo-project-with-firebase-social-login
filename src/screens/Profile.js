import React, {useEffect,useState} from 'react';
import {View, Text ,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import InputText from '../components/InputText';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';

const Profile = () => {
  const [info, setInfo] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState();
  const [address,setAddress] = useState('')



  const user = auth().currentUser;
  const userid = user.uid;

  useEffect(() => {
    database()
      .ref(`/signup/info/${userid}`)
      .on('value', snapshot => {
        setInfo(snapshot.val());
      });
  }, []);

  const update = ()=>{
    database()
        .ref('signup/info/' + userid)
        .update({
          UserName: name,
          Email: email,
          Password: password,
          Phone: phone,
          Address : address,
        })
        .then(() => console.log('Data Updated.'));
  }

  useEffect(()=>{
      console.log(info)
    setName(info?.UserName)
    setEmail(info?.Email)
    setPassword(info?.Password)
    setPhone(info?.Phone)
    setAddress(info?.Address)
  },[info])

  return (
    <View>
      {info !== null ? (
      <View>
      <View style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <View>
            <Avatar.Image
                source={require('../assets/images/UsamaAli.jpg')}
                size={150}
              />
            </View>
            <View style={{justifyContent:'center',marginLeft:20}}>
              <Text style={styles.title}>{info.UserName}</Text>
              <Text style={styles.title}>{info.Email}</Text>
            </View>
          </View>
        </View>
      <View style={styles.card}>
          <View style={{marginBottom:50}}>
            <View>
            <InputText
            placeholder="UserName"
            ico="person"
            value={name}
            changeText={val => setName(val)}
          />
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
          <InputText
            placeholder="Phone"
            ico="call"
            keyBoard='numeric'
            value={phone}
            changeText={val => setPhone(val)}
          />
          <InputText
            placeholder="Email"
            ico="ios-home"
            value={address}
            changeText={val => setAddress(val)}
          />
          
          </View>
          
          </View>
          
        </View>
        <TouchableOpacity
          onPress={() => {update()}}
          style={{alignItems: 'center', elevation: 8}}>
          <View style={styles.v4}>
            <Text style={{fontSize: 18, color: 'white'}}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
        </View>
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    imgstyle: {
      width: 120,
      height: 120,
      borderRadius: 150,
      resizeMode: 'contain',
    },
    desc: {
      marginTop: '3%',
      marginHorizontal: 5,
      color:'black'
    },
    title: {
    //   width: 180,
      fontWeight: '500',
      color:'black',
      fontSize:16,
    },
    price: {
      marginTop: 5,
      fontWeight: '500',
      fontSize: 18,
      color:'black'
    },
    liststyle: {
      // marginBottom:100
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: '4%',
      paddingHorizontal: '4%',
      marginHorizontal: '5%',
      marginTop: 10,
      elevation: 8,
    },
    rating: {
      paddingTop: 5,
      fontWeight: '500',
      color:'black'
    },
    v2: {
      alignItems: 'center',
      backgroundColor: '#F38000',
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 50,
    },
    txt: {
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
      color:'black'
    },
    v4: {
        width: 150,
        alignItems: 'center',
        backgroundColor: '#F38000',
        padding: '3%',
        borderRadius: 10,
        marginTop: '10%',
      },
    
    
  });
export default Profile;
