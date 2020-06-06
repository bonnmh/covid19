/**
 * @format
 * @flow
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const useStyles = () => {
  return StyleSheet.create({
    root: {},

    header_safe_area: {
      zIndex: 1000,
      backgroundColor: 'white',
    },
    header: {
      height: 50,
      paddingHorizontal: 16,
    },
    header_inner: {
      flex: 1,
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    search_icon_box: {
      width: 40,
      height: 40,
      borderRadius: 40,
      backgroundColor: '#e4e6eb',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input_box: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'white',
      width: width - 32,
    },
    back_icon_box: {
      width: 40,
      height: 40,
      borderRadius: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: '#e4e6eb',
      borderRadius: 16,
      paddingHorizontal: 16,
      fontSize: 15,
    },
    content: {
      width: width,
      height: height,
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 999,
    },
    content_safe_area: {
      flex: 1,
      backgroundColor: 'white',
    },
    content_inner: {
      flex: 1,
      paddingTop: 50,
    },
    separator: {
      marginTop: 5,
      height: 1,
      backgroundColor: '#e6e4eb',
    },
    image_placeholder_container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: height / 4,
      ...(Platform.OS === 'android' && {
        marginTop: 200,
      }),
    },
    image_placeholder: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    image_placeholder_text: {
      textAlign: 'center',
      color: 'gray',
      marginTop: 5,
    },
    search_item: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#e6e4eb',
      marginLeft: 16,
    },
    item_icon: {
      marginRight: 15,
    },
    container: {
      // position: 'relative',
      marginTop: 30,
    },
    personal_card_container: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      zIndex: 10,
      elevation: 10,
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    image_container: {
      // position: 'relative',
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      width: null,
      height: null,
    },
    cta_container: {
      position: 'relative',
    },
    text: {
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
    },
    icon_container: {
      width: 32,
      height: 32,
      borderRadius: 32,
      backgroundColor: '#3578E5',
      position: 'absolute',
      borderWidth: 3,
      borderColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scroll_view: {
      flexDirection: 'row',
      marginRight: 10,
    },
    fake_card: {
      width: 100,
      height: 170,
      backgroundColor: '#dddddd',
      marginLeft: 5,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 16,
    },
    fake_card_ghost: {
      backgroundColor: 'transparent',
      marginLeft: 10,
      borderWidth: 0,
      width: 100,
      height: 170,
    },
    column_spacer: {
      width: 10,
      height: 170,
    },
    fake_icon_box: {
      backgroundColor: '#e4e6eb',
      width: 40,
      height: 40,
      borderRadius: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scroll_view1: {
      width: '100%',
      height: height,
    },
    fake_post: {
      height: 100,
      marginTop: 16,
      borderRadius: 8,
      backgroundColor: '#cccccc',
      width: '90%',
      marginLeft: '5%',
    },
  });
};

export default useStyles;
