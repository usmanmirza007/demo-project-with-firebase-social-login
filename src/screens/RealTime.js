import React, { useState } from "react";
import{View,Text,TextInput,Button} from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

// database()
//   .ref('/users/')
//   .set({
//     name: 'Usama Ali',
//     age: 31,
//   })
//   .then(() => console.log('Data set.'));


const RealTime =()=>{

    const [text, setText] = useState()
    const [info, setInfo] = useState()

    SetData = () =>{
        database()
        .ref('user/info')
        .push({
            name: text,
            time: Date.now()
        })
        .then(() => console.log('Data set.'));
    }
    GetData = () =>{
        firebase.database()
        .ref('/signup/info/-MpywtQjWQ2RqXwBISJh')
        .on('value', snapshot => {
        // console.log('User data: ', snapshot.val());
        setInfo(snapshot.val())
     });
     console.log(info)
    }
    // function User({ userId }) {
    //     useEffect(() => {
    //       const onValueChange = database()
    //         .ref(`/users/${userId}`)
    //         .on('value', snapshot => {
    //           console.log('User data: ', snapshot.val());
    //         });
      
    //       // Stop listening for updates when no longer required
    //       return () => database().ref(`/users/${userId}`).off('value', onValueChange);
    //     }, [userId]);
    //   }


    return(
        <View>
            <Text style={{color:'black'}}>Hello</Text>

            <TextInput 
            placeholder="Enter any data"
            value={text}
            onChangeText={val=>setText(val)}
            placeholderTextColor="black"
            style={{borderWidth: 1, width: '70%', color: 'black'}}
            />
            <Button title="Set" onPress={()=>{SetData()}}/>
            <Text></Text>
            <Button title="Get" onPress={()=>{GetData()}}/>
            {/* <Text style={{color:'black'}}>{info.UserName}</Text> */}
            {/* <Text style={{color:'black'}}>{info.Emial}</Text> */}
            {/* <Text style={{color:'black'}}>{info.Password}</Text> */}
            
        </View>
    )
}

export default RealTime;