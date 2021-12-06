import React,{useState,useEffect} from "react";
import { Provider } from "react-redux"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {store,persistor} from "./src/redux/store"
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth';
import StackNavigation from "./src/screens/StackNavigation";
import Stack2 from "./src/screens/Stack2";
import BottomNav from "./src/navigation/BottomNavigation";

const Stack = createNativeStackNavigator();

const App = ()=>{

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // console.log(user);
  const onAuthStateChanged = user => {
    setUser(user);
    // if (initializing) setInitializing(false);
  };

  useEffect(() => {

    GoogleSignin.configure({
      webClientId: '54856088204-ojbr1c0kkbel3fvb5pardh2con48317g.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;

    

  }, [auth]);
// console.log("user", user);
  // if (initializing) return null;
  // console.log(user);

  return(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <NavigationContainer>
        {!user ? <StackNavigation /> : <BottomNav />}
        </NavigationContainer>
        </PersistGate>
      </Provider>
  )
}
export default App