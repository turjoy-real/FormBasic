import {StyleSheet, Text} from 'react-native';

const HeaderText = ({text}: {text: string}) => {
  return <Text style={styles.text}>Please sign-in to your account</Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GTSuperTxtTrial-Rg',
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 20,
    height: 36,
    width: '100%',
    textAlign: 'left',
  },
});
