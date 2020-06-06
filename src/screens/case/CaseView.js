import React from 'react';
import {View, Image} from 'react-native';

import {type Props, ViewProps} from './types';
import {TextView, Block, Button} from 'components';
import useStyles from './CaseStyles';
import {Colors} from 'themes/color';
import APIInstance from 'services/APIInstance';
import Chart from 'components/case/Chart';
import {providers} from 'context';

const data = [
  {x: new Date(2018, 1, 1), y: 0},
  {x: new Date(2018, 1, 16), y: 0},
  {x: new Date(2018, 1, 17), y: 200},
  {x: new Date(2018, 2, 1), y: 200},
  {x: new Date(2018, 2, 2), y: 300},
  {x: new Date(2018, 2, 5), y: 300},
];
const CaseView = (props: Props & ViewProps) => {
  const styles = useStyles();
  const {data: dataState} = providers.home.useHomeState();
  return (
    <View style={styles.container}>
      <Block margin={30} style={styles.header}>
        <TextView color={Colors.blue} h5 style={styles.txtCountry}>
          Viet Nam
        </TextView>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png',
          }}
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.imgHeader}
        />
      </Block>
      <Chart />
    </View>
  );
};

export default CaseView;
