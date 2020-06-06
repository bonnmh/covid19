import {StyleSheet, Dimensions} from 'react-native';
import {Scale} from 'components';
const win = Dimensions.get('window');
const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      width: '100%',
      height: win.height / 9,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      padding: 5,
    },
    txtCountry: {},
    imgHeader: {height: Scale(20), width: Scale(20), marginLeft: Scale(10)},
    chart: {
      flex: 1,
    },
  });
};
export default useStyles;
