import {StyleSheet, View} from 'react-native';
import CustomTextinput from '../atoms/CustomTextInput';
import Eye from '../../../assets/svgs/Eye';

const PasswordInput = () => {
  return (
    <View>
      <CustomTextinput placeholder="Password" />
      <View style={styles.logo}>
        <Eye width={24} />
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    height: '100%',
    width: 20,
  },
});
