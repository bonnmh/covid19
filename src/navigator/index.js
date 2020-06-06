import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStackNavigator from './LoginStackNavigator';
import BottomTabNavigator from './BottomStackNavigator';
import navigator from './navigator';
import Search from 'screens/search';

const Stack = createStackNavigator();
export const Root = () => {
  return (
    <NavigationContainer ref={(ref) => navigator.setContainer(ref)}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="LoginStackNavigator"
          component={LoginStackNavigator}
        />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
