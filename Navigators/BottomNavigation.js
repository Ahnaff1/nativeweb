import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppNavigation from './AppNavigation';
import { IconButton } from 'react-native-paper';
import PostDetails from '../Screens/PostDetails';
import Account from '../Screens/Account';
import CreatePost from '../Screens/CreatePost';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarLabel: () => {
        return null;
      },
      tabBarIcon: ({size, color}) => {
        let iconName;
        if (route.name === 'Main') {
          iconName = 'home';
        }else if (route.name === 'Account') {
          iconName = 'person';
        }else if (route.name === 'CreatePost') {
          iconName = 'add';}
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'black',
    })}>
 
    <Tab.Screen name="Main" component={AppNavigation} options={{headerShown: false}} />
    <Tab.Screen name="CreatePost" component={CreatePost} options={{headerShown: false}} />
    <Tab.Screen name="Account" component={Account} options={{headerShown: false}} />

  </Tab.Navigator>
    
  );
}