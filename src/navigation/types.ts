import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackParamList = {
  Menu: undefined;
  NoInternet: undefined;
  HomeScreen: undefined;
  Profile: undefined;
  Setting: undefined;
  Start: undefined;
  Stat: undefined;
  Workout: undefined;
};

type HomeScreenProps = NativeStackScreenProps<StackParamList, 'HomeScreen'>;
type MenuScreenProps = NativeStackScreenProps<StackParamList, 'Menu'>;
type NoInternetScreenProps = NativeStackScreenProps<StackParamList, 'NoInternet'>;
type ProfileScreenProps = NativeStackScreenProps<StackParamList, 'Profile'>;
type SettingScreenProps = NativeStackScreenProps<StackParamList, 'Setting'>;
type StartScreenProps = NativeStackScreenProps<StackParamList, 'Start'>;
type StatScreenProps = NativeStackScreenProps<StackParamList, 'Stat'>;
type WorkoutScreenProps = NativeStackScreenProps<StackParamList, 'Workout'>;

export {
  HomeScreenProps,
  MenuScreenProps,
  NoInternetScreenProps,
  ProfileScreenProps,
  SettingScreenProps,
  StackParamList,
  StartScreenProps,
  StatScreenProps,
  WorkoutScreenProps,
};
