import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {LogInNavigationProp} from '../../types';
import SocialButton from '../components/UI/molecules/SocialButton';
import Container from '../components/UI/atoms/Container';
import LoginForm from '../components/UI/templates/loginForm';
import HeaderText from '../components/UI/molecules/HeaderText';

const LoginScreen = ({navigation}: {navigation: LogInNavigationProp}) => {
  return (
    <Container>
      <HeaderText text="Please sign-in to your account" />
      <ImageBackground
        source={require('../assets/images/bg-1.png')}
        resizeMode="stretch"
        style={styles.auth}>
        <LoginForm navigation={navigation} />
        <Text style={styles.optionText}>or</Text>
        <SocialButton text="Continue with Google" />
      </ImageBackground>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  auth: {
    backgroundColor: 'white',
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
