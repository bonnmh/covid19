import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from 'themes/color';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.carot} size={'small'} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
