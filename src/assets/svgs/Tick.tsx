import {Path, Svg} from 'react-native-svg';

const Tick = ({width}: {width: number}) => {
  return (
    <Svg width={width} height={width * (7 / 10)} viewBox="0 0 10 7" fill="none">
      <Path
        d="M3.99999 5.586L8.59599 0.9895L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
        fill="black"
      />
    </Svg>
  );
};

export default Tick;
