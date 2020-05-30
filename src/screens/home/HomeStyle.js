import {StyleSheet, Dimensions} from 'react-native';
const W = Dimensions.get('window').width;
const useStyles = () => {
  return StyleSheet.create({
    img: {
      width: '100%',
      height: 300,
    },
    doctor: {
      position: 'absolute',
      top: 100,
      left: 60,
    },
    wrapperimage: {
      position: 'absolute',
      bottom: 0,

      alignSelf: 'center',
      width: W,
      height: 300,
    },
    bg: {
      position: 'absolute',
      width: 1000,
      height: 1000,
      top: -(930 - W / 2),
      alignSelf: 'center',
      borderRadius: 1000,
      overflow: 'hidden',
    },
    containerHeader: {
      position: 'relative',
    },
    map: {
      borderRadius: 8,
      marginTop: 15,
      padding: 15,
    },
  });
};
export default useStyles;
