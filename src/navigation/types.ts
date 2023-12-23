import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackParamList = {
  Menu: undefined;
  NoInternet: undefined;
  Workout: undefined;
  Setting: undefined;
  Start: undefined;
  Stat: undefined;
};

type MenuScreenProps = NativeStackScreenProps<StackParamList, 'Menu'>;
type NoInternetScreenProps = NativeStackScreenProps<StackParamList, 'NoInternet'>;
type SettingScreenProps = NativeStackScreenProps<StackParamList, 'Setting'>;
type StartScreenProps = NativeStackScreenProps<StackParamList, 'Start'>;
type StatScreenProps = NativeStackScreenProps<StackParamList, 'Stat'>;
type WorkoutScreenProps = NativeStackScreenProps<StackParamList, 'Workout'>;

export {
  MenuScreenProps,
  NoInternetScreenProps,
  SettingScreenProps,
  StackParamList,
  StartScreenProps,
  StatScreenProps,
  WorkoutScreenProps,
};
