import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../constants/Colors';

const Container = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
