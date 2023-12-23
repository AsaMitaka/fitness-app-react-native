import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './types';
import {
  MenuScreen,
  NoInternetScreen,
  WorkoutScreen,
  SettingScreen,
  StartScreen,
  StatScreen,
} from '../screen/';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="NoInternet" component={NoInternetScreen} />
      <Stack.Screen name="Stat" component={StatScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
