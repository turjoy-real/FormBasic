import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, StartUpNavigationProp} from '../../types';

import StartUpScreen from '../screens/StartUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Startup" component={StartUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
