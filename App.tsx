import React, { useEffect } from "react";
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DarkTheme from '@theme/DarkTheme';
import LightTheme from '@theme/LightTheme';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import RootStackNavigator from "@navigation/RootStackNavigator";

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    changeNavigationBarColor('transparent');
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={
          isDarkMode
            ? DarkTheme.colors.background
            : LightTheme.colors.background
        }
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
