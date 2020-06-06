import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Detail from 'screens/detail';
import {Colors} from 'themes/color';
import {BottomIcons} from 'icons';
import {Image} from 'react-native';
import {Scale} from 'components';
import HomeStackNavigator, {
  HomeStackNavigatorContext,
} from './HomeStackNavigator';
import Animation from 'screens/animation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBarOptions = {
    activeTintColor: Colors.blue,
    inactiveTintColor: 'gray',
    labelStyle: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: Scale(9),
    },
    style: {},
  };

  const tabBarIcon = (props, routeName) => {
    const {color} = props;

    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = BottomIcons.home;
        break;
      case 'Detail':
        icon = BottomIcons.search;
        break;
      case 'Animation':
        icon = BottomIcons.add;
        break;
    }

    return (
      <Image
        source={icon}
        style={{tintColor: color, height: Scale(18), width: Scale(18)}}
      />
    );
  };

  const screenOptions = ({route}) => {
    const {name} = route;
    return {
      tabBarIcon: (props) => tabBarIcon(props, name),
    };
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStackNavigatorContext} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Animation" component={Animation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
