import React from 'react';
import { Text, View } from 'react-native';
import { MenuScreenProps, StackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import Button from '../../component/Button';
import { useSelector } from 'react-redux';
import { COLORS, TEXT } from '../../core/colors';

const MenuScreen: React.FC<MenuScreenProps> = () => {
  const { height, weight } = useSelector((state) => state.user.user);
  const { activeTheme } = useSelector((state) => state.bgTheme);
  const { navigate } = useNavigation<StackParamList>();

  const handlePress = () => {
    navigate('Setting');
  };

  return (
    <View
      style={{
        flex: 1,
        top: 20,
        ...COLORS[activeTheme],
      }}>
      <Text style={{ ...TEXT[activeTheme] }}>Height: {height}</Text>
      <Text style={{ ...TEXT[activeTheme] }}>Weight: {weight}</Text>
      <Button onPress={handlePress} title="Setting" />
    </View>
  );
};

export default MenuScreen;
