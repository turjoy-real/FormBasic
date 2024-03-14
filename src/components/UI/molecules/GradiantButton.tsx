import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradiantButton = (props: any) => {
  return (
    <Pressable onPress={props.onPress}>
      <LinearGradient
        colors={['#FFFFFF', '#696C70']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.stroke}>
        <ImageBackground
          source={require('../../../assets/images/btn-primary.png')}
          resizeMode="cover"
          style={styles.button}>
          <View>
            <Text
              style={{
                color: '#fff0',
                textShadowColor: 'rgba(255,255,255,0.8)',
                textShadowOffset: {
                  width: 0,
                  height: 0,
                },
                textShadowRadius: 10,
                fontSize: 18,
                fontWeight: '600',
                textTransform: 'capitalize',
                fontFamily: 'Inter-Regular',
              }}>
              Get Started
            </Text>
            <Text
              style={{
                color: '#fff',
                position: 'absolute',
                fontSize: 18,
                fontWeight: '600',
                textTransform: 'capitalize',
                fontFamily: 'Inter-Regular',
              }}>
              Get Started
            </Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </Pressable>
  );
};

export default GradiantButton;

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').height / 16,
    width: Dimensions.get('window').width - 40,
    borderRadius: 14,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  stroke: {
    height: Dimensions.get('window').height / 16 + 4,
    width: Dimensions.get('window').width - 40 + 4,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
