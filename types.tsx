import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Startup: undefined;
  Signup: undefined;
  Login: undefined;
};

export type StartUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Startup'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Signup'
>;

export type LogInNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
