import {View} from 'react-native';
import CustomTextinput from '../atoms/CustomTextInput';
import PasswordInput from '../organisms/PasswordInput';
import BaseButton from '../atoms/Button';
import ForgotPassword from '../molecules/ForgotPassword';
import Navigate from '../molecules/Navigate';
import {LogInNavigationProp} from '../../../../types';

const LoginForm = ({navigation}: {navigation: LogInNavigationProp}) => {
  return (
    <View>
      <CustomTextinput placeholder="Email" />
      <PasswordInput />
      <BaseButton text="Login" />
      <ForgotPassword />
      <Navigate
        subText="New to our platform?"
        mainText=" Create an account"
        screen="Signup"
        navigation={navigation}
      />
    </View>
  );
};

export default LoginForm;
