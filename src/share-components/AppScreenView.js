/**
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {type Props, ViewProps} from './types';
import useStyles from './AppScreenStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const AppScreenView = (props: Props & ViewProps) => {
  const {children, contentContainerStyle} = props;
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView
        style={[{flex: 1}]}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={[styles.root, contentContainerStyle]}>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

AppScreenView.defaultProps = {};

export default AppScreenView;
