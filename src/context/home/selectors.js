import React from 'react';

import {providers} from 'context';

const homeSelectors = () => {
  const {data} = providers.home.useHomeState();
  console.log('homeSelectors', data);
  return {
    data: data,
  };
};

export default homeSelectors;
