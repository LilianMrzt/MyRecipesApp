import React from 'react';
import HomeScreen from '@views/HomeScreen';
import MyRecipesScreen from '@views/MyRecipesScreen';
import Icons from '@assets/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import I18n from '@utils/I18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteConstants from '@constants/RouteConstants';
import {StyleSheet} from 'react-native';
import CustomTabBarButton from '@components/CustomTabBarButton';
import SearchScreen from '@views/SearchScreen';
import ProfileScreen from '@views/ProfileScreen';

const Tab = createBottomTabNavigator();

const CreateRecipeComponent = () => {
  return null;
};

const TabNavigation = () => {
  const {colors} = useTheme();
  const styles = tabBarStyle(colors);

  return (
    <Tab.Navigator
      initialRouteName={RouteConstants.HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        headerStyle: styles.header,
        headerTintColor: colors.onBackground,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
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
        name={RouteConstants.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          title: I18n.t('SearchScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.search} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstants.CREATE_RECIPE_SCREEN}
        component={CreateRecipeComponent}
        options={{
          title: I18n.t('CreateRecipeScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.food} color={color} size={size} />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarButton: () => <CustomTabBarButton />,
        }}
      />
      <Tab.Screen
        name={RouteConstants.MY_RECIPES_SCREEN}
        component={MyRecipesScreen}
        options={{
          title: I18n.t('MyRecipesScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.food} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteConstants.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          title: I18n.t('ProfileScreen'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Ionicons name={Icons.person} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabBarStyle = (colors: any) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: colors.surface,
      borderTopWidth: 0,
      height: 70,
      paddingBottom: 0,
      position: 'absolute',
      bottom: 30,
      left: 20,
      right: 20,
      borderRadius: 15,
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
    header: {
      backgroundColor: colors.background,
      elevation: 0,
    },
  });

export default TabNavigation;
