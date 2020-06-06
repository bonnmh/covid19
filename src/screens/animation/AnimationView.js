/**
 * @format
 * @flow
 */

import React, {useRef} from 'react';
import {View, Image, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

import {type Props, ViewProps} from './types';
import useStyles from './AnimationStyles';
import {Button, TextView} from 'components';
import navigator from 'navigator/navigator';

const AnimationView = (props: Props & ViewProps) => {
  const styles = useStyles();
 

  return (
    <SafeAreaView style={styles.root}>
      <Button
        onPress={() => {
          navigator.navigate('Search');
        }}
        borderRadius={10}
        padding={15}
        color={'white'}
        borderWidth={1}
        borderColor={'red'}>
        <TextView color={'red'}>SearchBar</TextView>
      </Button>
    </SafeAreaView>
  );
};

AnimationView.defaultProps = {};

export default AnimationView;
