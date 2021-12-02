import React from  'react'
import {View, Text,StyleSheet,Image} from 'react-native'

const Details = ({route})=>{
    return(
        <View>
            <View style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={{uri: route.params.image}}
                style={styles.imgstyle}
              />
            </View>
            <View style={{padding: 12}}>
              <Text style={styles.title}>{route.params.title}</Text>
              <Text style={styles.price}>{route.params.price}$</Text>
              <Text style={styles.rating}>
                Rate: {route.params.rating.rate}
                {'    '}Count: {route.params.rating.count}
              </Text>
            </View>
          </View>
          <Text style={styles.desc}>{route.params.desc}</Text>
        </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    imgstyle: {
      width: 120,
      height: 120,
      borderRadius: 15,
      resizeMode: 'contain',
    },
    desc: {
      marginTop: '3%',
      marginHorizontal: 5,
      color:'black'
    },
    title: {
      width: 180,
      fontWeight: 'bold',
      color:'black'
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
    
  });

export default Details;