import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '@utils/I18n';
import {useTheme} from '@react-navigation/native';

const SearchScreen = () => {
  const {colors} = useTheme();
  const styles = searchScreenStyle(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome_text}>{I18n.t('SearchScreen')}</Text>
    </View>
  );
};

const searchScreenStyle = (colors: any) =>
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

export default SearchScreen;