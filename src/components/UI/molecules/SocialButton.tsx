import {Dimensions, Image, Pressable, Text} from 'react-native';

const SocialButton = (props: any) => {
  return (
    <Pressable
      style={{
        height: Dimensions.get('window').height / 18,
        margin: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
      }}>
      <Image
        source={require('../../../assets/images/google.png')}
        style={{
          width: 50,
          height: 24,
          resizeMode: 'contain',
        }}
      />
      <Text style={{color: 'white', fontFamily: 'Inter-Medium', fontSize: 18}}>
        {props.text}
      </Text>
    </Pressable>
  );
};
export default SocialButton;
