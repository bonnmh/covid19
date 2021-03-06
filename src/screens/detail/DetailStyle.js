/**
 * @format
 * @flow
 */

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
      left: -30,
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

    img_item: {
      width: (1.2 * W) / 3,
      height: (1.2 * W) / 3,
    },
    field_con: {
      // marginLeft: W / 2,
      position: 'absolute',
      width: (2 * W) / 3,
      left: W / 3 + 10,
      top: 10,
      paddingVertical: 10,
    },
    textDesc: {
      lineHeight: 20,
      marginTop: 10,
      maxWidth: (2 * W) / 3.4,
    },
    btn: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
  });
};

export default useStyles;
