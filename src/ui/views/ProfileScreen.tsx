import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '@utils/I18n';
import {useTheme} from '@react-navigation/native';

const ProfileScreen = () => {
  const {colors} = useTheme();
  const styles = profileScreenStyle(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome_text}>{I18n.t('ProfileScreen')}</Text>
    </View>
  );
};

const profileScreenStyle = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    welcome_text: {
      fontSize: 22,
      color: colors.onBackground,
    },
  });

export default ProfileScreen;
