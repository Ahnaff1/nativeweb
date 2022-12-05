import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../Context/AuthContext';
import MyTabs from './BottomNavigation';

export default function Nav() {
  const{loggedin}=React.useContext(AuthContext)
  return (

    <NavigationContainer>
       {loggedin?<MyTabs/>:<AuthNavigation/>}
    </NavigationContainer>
  );
}