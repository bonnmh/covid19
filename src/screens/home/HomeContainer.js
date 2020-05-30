import React from 'react';
import {type Props} from './types';
import HomeView from './HomeView';

const HomeContainer = (props: Props) => {
  return <HomeView {...props} />;
};

export default HomeContainer;
