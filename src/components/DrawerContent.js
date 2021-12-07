import React,{useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Logout,signOut} from '../auth/AuthProvider';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const DrawerContent = props => {
  const [info, setInfo] = useState(null);

  const user = auth().currentUser;
  const userid = user.uid;

  useEffect(() => {
    database()
      .ref(`/signup/info/${userid}`)
      .on('value', snapshot => {
        setInfo(snapshot.val());
        // console.log(info);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
          {info !== null ? (
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/images/UsamaAli.jpg')}
                size={70}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{info.UserName}</Title>
                <Caption style={styles.caption}>{info.Email}</Caption>
              </View>
            </View>
            ) : null}
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Movies');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate('Category');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {
              props.navigation.navigate('Feed');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              props.navigation.navigate('Post');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" size={20} />}
          label="Sign Out"
          onPress={() => {
            Logout();
          }}
        />
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" size={20} />}
          label="Google Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    // backgroundColor: '#463EC9',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
