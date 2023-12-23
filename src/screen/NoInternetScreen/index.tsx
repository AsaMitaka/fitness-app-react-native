import React from 'react';
import { Text, View } from 'react-native';
import { NoInternetScreenProps } from '../../navigation/types';

const NoInternetScreen: React.FC<NoInternetScreenProps> = () => {
  return (
    <View>
      <Text>No Internet</Text>
    </View>
  );
};

export default NoInternetScreen;
