import React from 'react'
import {View,Text,Button,TouchableOpacity} from "react-native"
import { Logout } from './AuthProvider'

const SignOut = (props)=>{
    return(
        <View>
            
            <Text style={{fontSize:30,color:'black'}}>SignOut</Text>
            <Button title="SignOut" onPress={()=>{Logout()}}/>
            
            <Text style={{fontSize:30,color:'black'}}>move to movies section</Text>
          
            <Button title="Movies" onPress={()=>{props.navigation.navigate("Movies")}}/>

            <Text style={{fontSize:30,color:'black'}}>move to RealTime</Text>

            <Button title="RealTime" onPress={()=>{props.navigation.navigate("RealTime")}}/>
        </View>
    )
}

export default SignOut;