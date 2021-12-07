import React, {useEffect, useState, useCallback,useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../redux/productDetails/actions';

const Movies = ({navigation}) => {
  const dispatch = useDispatch();
  const moviesData = useSelector(state => state.movies.movies);
  const isLoading = useSelector(state => state.movies.isLoading);

  // alert(moviesData.length);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getMovies('https://fakestoreapi.com/products/'));
  }, []);


  onRefresh = () => {
    setRefreshing(true),
      dispatch(getMovies('https://fakestoreapi.com/products/'))
      moviesData.length == 0 ? setRefreshing(false) : setRefreshing(false);

    setRefreshing(false);
  };
  footer = () => {
    return <View style={{marginBottom: 20}}></View>;
  };
   header = () => {
    return <View style={{marginTop: 10}}></View>;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {!isLoading && moviesData.legth !== 0 ?  (
        <FlatList
          style={styles.liststyle}
          data={moviesData}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('Details', {
                  title: item.title,
                  price: item.price,
                  rating: item.rating,
                  desc: item.description,
                  image: item.image,
                });
              }}>
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={{uri: item.image}} style={styles.imgstyle} />
                  </View>
                  <View style={{marginHorizontal: 15}}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.title}
                    </Text>
                    <Text style={styles.price}>{item.price}$</Text>
                    <Text style={styles.rating}>
                      Rate: {item.rating.rate}
                      {'    '}Count: {item.rating.count}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text numberOfLines={3} style={styles.desc}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={header}
          ListFooterComponent={footer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ): isLoading && moviesData.length == 0 ? (
        <ScrollView
        contentContainerStyle={styles.msg}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />

        }>
          <Text style={{color:'black',fontSize:30}}>No Data</Text>
        </ScrollView>
      ): (
        <ActivityIndicator style={styles.loader} color="red" size="large" />
      )
      }
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
    borderRadius: 15,
    resizeMode: 'contain',
  },
  desc: {
    marginTop: '3%',
    marginHorizontal: 5,
    color: 'black',
  },
  title: {
    width: 180,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
  liststyle: {
    // marginBottom:100
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal:20 ,
    marginHorizontal: 20,
    // marginVertical:20,
    marginTop: 10,
    elevation: 8,
  },
  rating: {
    paddingTop: 5,
    fontWeight: '500',
    color: 'black',
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
    color: 'black',
  },
  loader: {},
  msg:{
    justifyContent:'center'
  }
});

export default Movies;
