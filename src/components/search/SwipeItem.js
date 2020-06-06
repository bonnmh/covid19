import React from 'react';

import {Animated, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeItem = ({children}) => {
  const _updateRef = React.useRef();
  const _renderRightAction = (icon, color, backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          onPress={() => {
            if (x === 64) {
              _updateRef.current.close();
            } else {
              alert(x);
            }
          }}
          style={[styles.rightAction, {backgroundColor: backgroundColor}]}>
          <Icon name={icon} size={30} color={color} />
        </RectButton>
      </Animated.View>
    );
  };

  const _renderRightActions = (progress) => (
    <View style={{width: 192, flexDirection: 'row'}}>
      {_renderRightAction('menu', '#000000', '#eeeeee', 192, progress)}
      {_renderRightAction('bell', '#000000', '#cccccc', 128, progress)}
      {_renderRightAction('delete', '#ffffff', '#dd2c00', 64, progress)}
    </View>
  );

  return (
    <Swipeable
      ref={_updateRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={_renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default SwipeItem;

const styles = StyleSheet.create({
  item: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  message: {
    color: 'gray',
    fontSize: 14,
    marginTop: 3,
  },
  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: 20,
  },
});
