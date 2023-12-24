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
  ProfileScreen,
} from '../screen/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { COLORS, TEXT } from '../core/colors';
import { RootState } from '../redux/store/store';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

function HomeScreen() {
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);
  const { isPurchased } = useSelector<RootState>((state) => state.user.user);

  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS[activeTheme].backgroundColor },
      }}>
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={28} />,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: TEXT[activeTheme].color,
        }}
      />
      {isPurchased && (
        <Tab.Screen
          name="Stat"
          component={StatScreen}
          options={{
            tabBarLabel: 'Stat',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={28} />
            ),
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: TEXT[activeTheme].color,
          }}
        />
      )}
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={28} />
          ),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: TEXT[activeTheme].color,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={28} />
          ),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: TEXT[activeTheme].color,
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NoInternet" component={NoInternetScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
