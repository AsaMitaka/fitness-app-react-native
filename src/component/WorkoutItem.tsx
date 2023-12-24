import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootState } from '../redux/store/store';
import { COLORS, TEXT } from '../core/colors';

type WorkoutItemProps = {
  title: string;
  descr: string;
};

const WorkoutItem: React.FC<WorkoutItemProps> = ({ title, descr }) => {
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);

  console.log(activeTheme, TEXT[activeTheme]);
  return (
    <View
      style={{
        ...COLORS[activeTheme],
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: TEXT[activeTheme].color,
      }}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ ...TEXT[activeTheme] }}>{title}</Text>
        <Text style={{ ...TEXT[activeTheme] }}>{descr}</Text>
      </View>
      <Pressable onPress={() => alert('Workout')}>
        <MaterialCommunityIcons name="chevron-right" size={32} color={TEXT[activeTheme].color} />
      </Pressable>
    </View>
  );
};

export default WorkoutItem;
