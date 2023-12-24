import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenProps } from '../../navigation/types';
import { COLORS, TEXT } from '../../core/colors';
import { RootState } from '../../redux/store/store';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WorkoutItem from '../../component/WorkoutItem';

const MenuScreen: React.FC<MenuScreenProps> = () => {
  const { navigate } = useNavigation();
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);
  const { username, imgUrl } = useSelector<RootState>((state) => state.user.user);

  const handleProfile = () => {
    navigate('Profile');
  };

  return (
    <View
      style={{
        flex: 1,
        top: 20,
        ...COLORS[activeTheme],
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={handleProfile}>
            <Image
              source={{
                uri: imgUrl,
              }}
              borderRadius={50}
              height={75}
              width={75}
            />
          </Pressable>
          <Text style={{ ...TEXT[activeTheme], fontSize: 24, marginLeft: 10 }}>
            Hello, {username}
          </Text>
        </View>
        <Pressable onPress={() => alert('Log out!')}>
          <MaterialCommunityIcons name="logout" size={28} color={TEXT[activeTheme].color} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <Text style={{ ...TEXT[activeTheme], fontSize: 20 }}>Exercises</Text>
        <Text style={{ ...TEXT[activeTheme], fontSize: 20 }}>2</Text>
      </View>
      <View style={{ flexDirection: 'column', marginTop: 15 }}>
        <WorkoutItem title="Push ups" descr="3 series x 12 rep" />
        <WorkoutItem title="Squads" descr="3 series x 12 rep" />
      </View>
    </View>
  );
};

export default MenuScreen;
