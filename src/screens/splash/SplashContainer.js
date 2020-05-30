/**
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {type Props} from './types';
import SplashView from './SplashView';
import navigator from 'navigator/navigator';

const SplashContainer = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('BottomTabNavigator');
    }, 1000);
  });

  return <SplashView />;
};

export default SplashContainer;
