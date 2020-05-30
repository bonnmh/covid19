/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {type Props, ViewProps} from './types';
import useStyles from './DetailStyle';

const DetailView = (props: Props & ViewProps) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Detail Component</Text>
    </View>
  );
};

DetailView.defaultProps = {};

export default DetailView;
