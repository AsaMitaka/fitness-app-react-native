import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { StackParamList } from '../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { setHeight, setWeight } from '../../redux/features/user/userSlice';
import {
  setFirstScreen,
  setSecondScreen,
  setThirdScreen,
} from '../../redux/features/screens/screensSlice';
import { COLORS, TEXT } from '../../core/colors';

const StartScreen = () => {
  const { firstScreen, secondScreen, thirdScreen } = useSelector((state) => state.screens);
  const { activeTheme } = useSelector((state) => state.bgTheme);
  const [height, setHeightLocal] = useState(0);
  const [weight, setWeightLocal] = useState(0);

  const dispatch = useDispatch();
  const { navigate } = useNavigation<StackParamList>();

  const handlePress = () => {
    navigate('HomeScreen');
    dispatch(setThirdScreen());
  };

  const handleFirstScreen = () => {
    if (height < 120 || height > 210) return;

    dispatch(setHeight(height));
    dispatch(setFirstScreen());
  };

  const handleSecondScreen = () => {
    if (weight < 30 || weight > 250) return;

    dispatch(setWeight(weight));
    dispatch(setSecondScreen());
  };

  if (thirdScreen) {
    navigate('Menu');
  }

  if (!firstScreen) {
    return (
      <View style={[{ flex: 1, top: 20 }, COLORS[activeTheme]]}>
        <Text style={[{ ...TEXT[activeTheme] }]}>Height: </Text>
        <Text style={[{ ...TEXT[activeTheme], fontWeight: 300 }]}>min 120 - max 210</Text>
        <TextInput
          value={height.toString()}
          onChangeText={setHeightLocal}
          style={[{ ...TEXT[activeTheme] }]}
          keyboardType="numeric"
        />
        <Button onPress={handleFirstScreen} title="Next" />
      </View>
    );
  }

  if (firstScreen && !secondScreen) {
    return (
      <View style={[{ flex: 1, top: 20 }, COLORS[activeTheme]]}>
        <Text style={[{ ...TEXT[activeTheme] }]}>Weight: </Text>
        <Text style={[{ ...TEXT[activeTheme], fontWeight: 300, marginBottom: 20 }]}>
          min 30 - max 250
        </Text>
        <TextInput
          value={weight.toString()}
          onChangeText={setWeightLocal}
          style={[{ ...TEXT[activeTheme] }]}
          keyboardType="numeric"
        />
        <Button onPress={handleSecondScreen} title="Next" />
      </View>
    );
  }

  return (
    <View style={[{ flex: 1, top: 20 }, COLORS[activeTheme]]}>
      <Text style={[{ ...TEXT[activeTheme] }]}>Start 3</Text>
      <Button onPress={handlePress} title="Menu" />
    </View>
  );
};

export default StartScreen;
