import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {LogInNavigationProp, SignUpNavigationProp} from '../../../../types';
import Colors from '../../../constants/Colors';

const Navigate = ({
  navigation,
  subText,
  mainText,
  screen,
}: {
  navigation: LogInNavigationProp | SignUpNavigationProp;
  subText: string;
  mainText: string;
  screen: 'Login' | 'Startup' | 'Signup';
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>{subText}</Text>
      <Pressable onPress={() => navigation.navigate(screen)}>
        <Text style={{color: Colors.primary}}>{mainText}</Text>
      </Pressable>
    </View>
  );
};

export default Navigate;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 34,
  },
  subText: {color: 'white', opacity: 0.7},
});
