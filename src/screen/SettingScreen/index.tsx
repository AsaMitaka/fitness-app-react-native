import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/features/bgTheme/btThemeSlice';
import Button from '../../component/Button';
import { COLORS, TEXT } from '../../core/colors';
import { RootState } from '../../redux/store/store';

const ScreenScreen = () => {
  const dispatch = useDispatch();
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);

  const toggleTheme = () => {
    console.log('Toggle theme function called');
    const newTheme = activeTheme === 'darkMode' ? 'lightMode' : 'darkMode';

    dispatch(setTheme(newTheme));
  };

  return (
    <View
      style={{
        flex: 1,
        top: 20,
        ...COLORS[activeTheme],
      }}>
      <Text style={{ ...TEXT[activeTheme] }}>Setting</Text>
      <Text style={{ ...TEXT[activeTheme], marginBottom: 20 }}>Current Theme: {activeTheme}</Text>
      <Button title="Change theme" onPress={toggleTheme} />
    </View>
  );
};

export default ScreenScreen;
