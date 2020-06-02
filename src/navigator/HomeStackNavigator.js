import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/home';
import Case from 'screens/case';
import {homeProvider} from 'context/home';

const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Case"
        component={Case}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const HomeStackNavigatorContext = (props) => (
  <homeProvider.HomeProvider>
    <HomeStackNavigator {...props} />
  </homeProvider.HomeProvider>
);

export default HomeStackNavigatorContext;
