import React from 'react';
import { Text, View } from 'react-native';
import { WorkoutScreenProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { COLORS, TEXT } from '../../core/colors';
import Button from '../../component/Button';

const WorkoutScreen: React.FC<WorkoutScreenProps> = () => {
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);

  return (
    <View style={{ flex: 1, top: 20, ...COLORS[activeTheme] }}>
      <Text style={{ ...TEXT[activeTheme], fontSize: 24 }}>Workout</Text>
      <Text style={{ ...TEXT[activeTheme], marginVertical: 10 }}>First Task</Text>
      <Button onPress={() => {}} title="Next" />
    </View>
  );
};

export default WorkoutScreen;
