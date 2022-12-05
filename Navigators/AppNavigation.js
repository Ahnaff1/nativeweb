import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../Screens/Login';
// import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import PostDetails from '../Screens/PostDetails';



const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PostDetails' component={PostDetails}/>
    </Stack.Navigator>
  );
}