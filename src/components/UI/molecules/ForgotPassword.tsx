import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/Colors';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}> Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Dimensions.get('window').height / 32,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  text: {color: Colors.primary},
});
