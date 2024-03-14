import {Dimensions, StyleSheet, TextInput} from 'react-native';

const CustomTextinput = ({placeholder}: {placeholder: string}) => {
  return (
    <TextInput
      style={styles.input}
      value={''}
      placeholder={placeholder}
      placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
    />
  );
};

export default CustomTextinput;

const styles = StyleSheet.create({
  input: {
    height: Dimensions.get('window').height / 15,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  },
});
