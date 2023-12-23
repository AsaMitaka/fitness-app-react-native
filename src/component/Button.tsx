import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BTN } from '../core/colors';

interface IButton {
  onPress: () => void;
  title: string;
}

const Button: React.FC<IButton> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: BTN.background,
        borderRadius: BTN.borderRadius,
        paddingHorizontal: BTN.paddingHorizontal,
        paddingVertical: BTN.paddingVertical,
        alignItems: BTN.alignItems,
      }}>
      <Text
        style={{
          color: BTN.color,
          fontSize: BTN.fontSize,
          fontWeight: BTN.fontWeight,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
