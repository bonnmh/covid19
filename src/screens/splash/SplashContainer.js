/**
 * @format
 * @flow
 */

import React from 'react';
import {type Props} from './types';
import SplashView from './SplashView';
import navigator from 'navigator/navigator';

const SplashContainer = (props: Props) => {
  setTimeout(() => {
    navigator.navigate('BottomTabNavigator');
  }, 1000);

  return <SplashView />;
};

export default SplashContainer;
