import RouteConstants from '@constants/RouteConstants';
import CreateRecipeStackNavigation from '@navigation/CreateRecipeStackNavigation';
import TabNavigation from '@navigation/TabNavigation';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
                headerShown: false
            }}
        >
            <Stack.Screen
                name={RouteConstants.TAB_NAVIGATION}
                component={TabNavigation}
            />
            <Stack.Group>
                <Stack.Screen
                    name={RouteConstants.CREATE_RECIPE_SCREEN_STACK}
                    component={CreateRecipeStackNavigation}
                    options={{ ...TransitionPresets.RevealFromBottomAndroid }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default RootStackNavigator;
