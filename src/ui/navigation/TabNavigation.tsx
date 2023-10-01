import React from 'react';
import HomeScreen from '@views/HomeScreen';
import SecondScreen from '@views/SecondScreen';
import Icons from '@assets/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import I18n from '@utils/I18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteConstants from '@constants/RouteConstants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={RouteConstants.HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.onBackground,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name={RouteConstants.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: I18n.t('HomeScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.home} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstants.SECOND_SCREEN}
        component={SecondScreen}
        options={{
          title: I18n.t('SecondScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.food} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
