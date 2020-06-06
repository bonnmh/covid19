import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {type Props} from './types';
import AnimationView from './AnimationView';

const AnimationContainer = (props: Props) => {
  return <AnimationView {...props} />;
};

export default AnimationContainer;

const styles = StyleSheet.create({});
