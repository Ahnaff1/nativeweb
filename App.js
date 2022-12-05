import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text
} from 'react-native';
import { AuthProvider } from './Context/AuthContext';
import Nav from './Navigators/Nav';
// import Login from './Screens/Login';
//  import Signup from './Screens/Signup';
import AuthNavigation from './Navigators/AuthNavigation';


const App= () => {
  
  return (
    <React.Fragment>
    {Platform.OS=="web" ?
     <AuthNavigation/>
    // <View style={{backgroundColor:"red",flex:1}}>
        
    //     <Text>yes</Text>
    // </View>
    :
    <AuthProvider>
        <Nav/>
    </AuthProvider>
  
    }
    </React.Fragment>

   
  );
};



export default App;
