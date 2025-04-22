import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenNames } from './ScreenNames';
import { Screens } from './Screens';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.SplashLoadingScreen}>

      <Stack.Screen
        name={ScreenNames.SplashLoadingScreen}
        component={Screens.SplashLoadingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ScreenNames.LoginScreen}
        component={Screens.LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ScreenNames.RegisterScreen}
        component={Screens.RegisterScreen}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
}
