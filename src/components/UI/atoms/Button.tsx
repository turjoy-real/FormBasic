import {Dimensions, Pressable, Text} from 'react-native';
import Colors from '../../../constants/Colors';

const BaseButton = (props: any) => {
  return (
    <Pressable
      style={{
        height: Dimensions.get('window').height / 16,
        margin: 12,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text style={{color: 'black', fontFamily: 'Inter-Medium', fontSize: 18}}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default BaseButton;
