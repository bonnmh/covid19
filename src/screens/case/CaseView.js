import React from 'react';
import {View, Image} from 'react-native';

import {type Props, ViewProps} from './type';
import {TextView, Block, Button} from 'components';
import useStyles from './CaseStyle';
import {Colors} from 'themes/color';
import APIInstance from 'services/APIInstance';
import Chart from 'components/case/Chart';

const CaseView = (props: Props & ViewProps) => {
  const styles = useStyles();
  React.useEffect(() => {
    getCaseByCountry();
  }, []);
  const getCaseByCountry = async () => {
    const result = await APIInstance.get('live/country/VietNam');
    console.log(result);
  };
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
