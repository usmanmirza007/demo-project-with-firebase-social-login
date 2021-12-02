import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"

const ProductCard = ()=> {
    return(
        <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Details');
        }}>
        <View style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={{uri: moviesData.movies[0].image}}
                style={styles.imgstyle}
              />
            </View>
            <View style={{padding: 12}}>
              <Text style={styles.title}>{moviesData.movies[0].title}</Text>
              <Text style={styles.price}>{moviesData.movies[0].price}$</Text>
              <Text style={styles.rating}>
                Rate: {moviesData.movies[0].rating.rate}
                {'    '}Count: {moviesData.movies[0].rating.count}
              </Text>
            </View>
          </View>
          <Text style={styles.desc}>{moviesData.movies[0].description}</Text>
        </View>
      </TouchableOpacity>
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
      // textAlign:'justify'
    },
    title: {
      width: 180,
      fontWeight: 'bold',
    },
    price: {
      marginTop: 5,
      fontWeight: '500',
      fontSize: 18,
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
    },
  });
  
  export default Movies;
  

export default ProductCard;