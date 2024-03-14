import {Dimensions, ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
import SocialButton from '../components/UI/molecules/SocialButton';
import {SignUpNavigationProp} from '../../types';
import HeaderText from '../components/UI/molecules/HeaderText';
import Container from '../components/UI/atoms/Container';
import SignUpForm from '../components/UI/templates/signupForm';

const SignUp = ({navigation}: {navigation: SignUpNavigationProp}) => {
  return (
    <Container>
      <HeaderText text="Please sign-up to your account" />
      <ImageBackground
        source={require('../assets/images/bg-1.png')}
        resizeMode="cover"
        style={styles.auth}>
        <SignUpForm navigation={navigation} />
        <Text style={styles.optionText}>or</Text>
        <SocialButton text="Continue with Google" />
      </ImageBackground>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  auth: {
    paddingVertical: 10,
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
    overflow: 'hidden',
    paddingTop: Dimensions.get('window').height / 75,
  },
  optionText: {
    color: 'white',
    opacity: 0.7,
    margin: 20,
    textAlign: 'center',
  },
});
