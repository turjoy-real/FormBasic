import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/Colors';
import Tick from '../../../assets/svgs/Tick';

const PolicyAgreement = () => {
  return (
    <View style={styles.terms}>
      <View style={styles.box}>
        <Tick width={12} />
      </View>
      <Text style={{color: 'white', opacity: 0.7}}>I agree to</Text>
      <Pressable>
        <Text style={{color: Colors.primary}}> privacy policy and terms</Text>
      </Pressable>
    </View>
  );
};

export default PolicyAgreement;

const styles = StyleSheet.create({
  terms: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Dimensions.get('window').height / 32,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
});
