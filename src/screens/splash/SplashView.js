/**
 * @format
 * @flow
 */

import React from 'react';
import {Image, ActivityIndicator} from 'react-native';
import useStyles from './SplashStyles';
import AppScreen from 'share-components';

const SplashView = (props) => {
  const styles = useStyles();

  return (
    <AppScreen contentContainerStyle={styles.root}>
      <ActivityIndicator size="large" color={'red'} />
    </AppScreen>
  );
};

SplashView.defaultProps = {};

export default SplashView;
