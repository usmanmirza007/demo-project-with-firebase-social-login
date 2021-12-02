import React, { useState } from "react";
import{View,Text,TextInput,Button} from 'react-native'
import database from '@react-native-firebase/database';

database()
  .ref('/users/')
  .set({
    name: 'Usama Ali',
    age: 31,
  })
  .then(() => console.log('Data set.'));

const RealTime =()=>{

    const [text,setText]=useState()

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
            <Button title="Set" onPress={()=>{database()}}/>
        </View>
    )
}

export default RealTime;