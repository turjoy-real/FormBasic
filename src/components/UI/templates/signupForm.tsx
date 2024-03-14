import {View} from 'react-native';
import CustomTextinput from '../atoms/CustomTextInput';
import PasswordInput from '../organisms/PasswordInput';
import PolicyAgreement from '../molecules/PolicyAgreement';
import BaseButton from '../atoms/Button';
import Navigate from '../molecules/Navigate';
import {SignUpNavigationProp} from '../../../../types';

const SignUpForm = ({navigation}: {navigation: SignUpNavigationProp}) => {
  return (
    <View>
      <CustomTextinput placeholder="Name" />
      <CustomTextinput placeholder="Email" />
      <PasswordInput />
      <PolicyAgreement />
      <BaseButton text="Sign Up" />
      <Navigate
        subText="Already have an account?"
        mainText=" Sign in instead"
        screen="Login"
        navigation={navigation}
      />
    </View>
  );
};

export default SignUpForm;
