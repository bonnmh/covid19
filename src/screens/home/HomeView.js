import React from 'react';
import {ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {type Props} from './types';
import {Block, TextView, Button, Loading} from 'components';
import {Colors} from 'themes/color';
import useStyles from './HomeStyle';
import navigator from 'navigator/navigator';
import APIInstance from 'services/APIInstance';
import {providers, actions} from 'context';

const ItemDot = ({color1, color2, num, title}) => {
  return (
    <Block block>
      <Block middle>
        <Block
          width={30}
          height={30}
          middle
          centered
          borderRadius={30}
          color={color1}>
          <Block
            width={20}
            height={20}
            borderWidth={4}
            borderRadius={20}
            borderColor={color2}
          />
        </Block>
        <TextView padding={15} color={color2} h3>
          {num}
        </TextView>
        <TextView color="gray" h6>
          {title}
        </TextView>
      </Block>
    </Block>
  );
};
const HomeView = (props: Props & ViewProps) => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = providers.home.useHomeDispatch();
  const {data: dataState, loadData} = providers.home.useHomeState();
  React.useEffect(() => {
    dispatch(actions.home.setLoadData(true));
    getData();
    console.log('dataState', dataState);
  }, []);
  const getData = async () => {
    const data = await APIInstance.get('live/country/viet-nam');
    console.log(data);
    dispatch(actions.home.setHome(data.data));
  };
  console.log(
    'dataState[dataState.length - 1].Country',
    dataState[dataState.length - 1]?.Country,
  );
  if (loadData) {
    return <Loading />;
  }
  return (
    <ScrollView contentContainerStyle={{width: '100%'}}>
      <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperimage}>
            <Image
              style={styles.doctor}
              source={require('images/Drcorona.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require('images/virus.png')}
          />
        </Block>
        <Block>
          <Button
            color="#fff"
            borderWidth={1}
            borderColor="#f0f0f0"
            margin={10}
            borderRadius={30}>
            <Block direction="row" paddingHorizontal={15} middle>
              <Feather name="map-pin" size={16} color={Colors.blue1} />
              <Block block padding={10}>
                <TextView h6>VietNam</TextView>
              </Block>
              <Feather name="chevron-down" size={16} color={Colors.blue1} />
            </Block>
          </Button>
        </Block>
        <Block padding={10} style={{marginTop: 10}}>
          <Block justifyContent="space-between" direction="row">
            <Block>
              <TextView h6>Case Update</TextView>
              <TextView>Newest update March 28</TextView>
            </Block>
            <Button
              onPress={() => navigator.navigate('Case')}
              textColor={Colors.blue1}>
              See details
            </Button>
          </Block>
          <Block
            color="#fff"
            borderRadius={8}
            padding={10}
            shadow
            style={{marginTop: 10}}
            direction="row">
            <ItemDot
              color1={Colors.carot_op}
              color2={Colors.carot}
              num={dataState[dataState.length - 1]?.Confirmed}
              title={'Infected'}
            />
            <ItemDot
              color1={Colors.red_op}
              color2={Colors.red}
              num={dataState[dataState.length - 1]?.Deaths}
              title={'Deaths'}
            />

            <ItemDot
              color1={Colors.green_op}
              color2={Colors.green}
              num={dataState[dataState.length - 1]?.Recovered}
              title={'Recovered'}
            />
          </Block>
          <Block style={{marginTop: 20}}>
            <Block direction="row" justifyContent="space-between">
              <TextView h6>Spread of Virus</TextView>
              <Button
                textColor={Colors.blue1}
                onPress={() => navigation.navigate('Detail')}>
                See details
              </Button>
            </Block>
            <Block color={'#fff'} style={styles.map}>
              <Image source={require('images/map.png')} />
            </Block>
          </Block>
        </Block>
      </Block>
      <TextView>{dataState[dataState.length - 1]?.Country}</TextView>
      {/* {dataState.map((e) => {
        return <Block mgTop={10} color="red" height={100} width={'100%'} />;
      })} */}
    </ScrollView>
  );
};

export default HomeView;
