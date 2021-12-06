import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import database from '@react-native-firebase/database';

export const Signup = (userName, email, password) => {
  return auth()
    .createUserWithEmailAndPassword(userName, email, password)
    .then(userCredential => {

      const user = userCredential.user;
      const userid = user.uid;

      database()
        .ref('signup/info/' + userid)
        .set({
          UserName: userName,
          Emial: email,
          Password: password,
        })
        .then(() => console.log('Signup Data set.'));

      console.log('User account created & signed in!');
    })

    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const Login = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const Logout = () => {
  return auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

// export const GoogleSignIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log('success', userInfo)
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {

//     } else if (error.code === statusCodes.IN_PROGRESS) {

//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

//     } else {
//       // some other error happened
//     }
//   }
// }

export const GoogleSignIn = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    } else {
      // some other error happened
    }
  }
};

export const sendOtp = number => {
  try {
    if (!number) {
      Alert.alert('Error', 'Please Enter Your Number');
    }
    return auth().signInWithPhoneNumber(number);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const confirmCode = (state, code) => {
  return state
    .confirm(code)
    .then(() => {})

    .catch(error => {
      Alert.alert(error.code, error.message);
    });
};
