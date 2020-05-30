import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Splash from 'screens/splash';

const Stack = createStackNavigator();
const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default LoginStackNavigator;
