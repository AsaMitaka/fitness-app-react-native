import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { COLORS, TEXT } from '../../core/colors';
import Button from '../../component/Button';

const ProfileScreen = () => {
  const { activeTheme } = useSelector<RootState>((state) => state.bgTheme);
  const { email, imgUrl, height, username, weight } = useSelector<RootState>(
    (state) => state.user.user,
  );

  return (
    <View style={{ ...COLORS[activeTheme], top: 25, flex: 1, alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, ...TEXT[activeTheme], fontSize: 24, fontWeight: '600' }}>
        User {username}
      </Text>
      <Image source={{ uri: imgUrl }} height={150} width={150} borderRadius={50} />
      <Text style={{ ...TEXT[activeTheme], fontSize: 22, marginTop: 10 }}>Email: {email}</Text>
      <Text style={{ ...TEXT[activeTheme], marginTop: 10 }}>Height: {height}</Text>
      <Text style={{ ...TEXT[activeTheme], marginTop: 10 }}>Weight: {weight}</Text>
      <Text style={{ ...TEXT[activeTheme], marginVertical: 10 }}>Type of training: </Text>
      <Button onPress={() => alert('Changed')} title="Change type of training" />
    </View>
  );
};

export default ProfileScreen;
