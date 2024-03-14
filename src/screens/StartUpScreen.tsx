import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';
import GradiantButton from '../components/UI/molecules/GradiantButton';
import Logo from '../assets/svgs/Logo.tsx';
import Colors from '../constants/Colors.tsx';
import {StartUpNavigationProp} from '../../types.tsx';

const StartUpScreen = ({navigation}: {navigation: StartUpNavigationProp}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/startupbg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            height: '100%',
            justifyContent: 'flex-end',
            paddingBottom: Dimensions.get('screen').height / 6,
          }}>
          <Logo />
          <View
            style={{
              justifyContent: 'flex-start',
              marginBottom: Dimensions.get('screen').height / 12,
            }}>
            <Text style={styles.text}>Zero Cost</Text>
            <Text style={styles.text}>WhatsApp Messaging</Text>
            <Text style={styles.text}>platform</Text>
          </View>
          <GradiantButton onPress={() => navigation.navigate('Signup')} />
          <View
            style={{
              flexDirection: 'row',
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: Dimensions.get('screen').height / 32,
            }}>
            <Text style={{color: 'white', opacity: 0.7}}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{color: Colors.primary}}> Sign in instead</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StartUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'GTSuperTxtTrial-Rg',
    color: 'white',
    fontSize: 28,
    fontWeight: '400',

    height: 36,
  },
});
