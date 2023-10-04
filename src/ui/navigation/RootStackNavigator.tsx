import RouteConstants from '@constants/RouteConstants';
import TabNavigation from '@navigation/TabNavigation';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import CreateRecipeScreen from '@views/CreateRecipeScreen';
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
                    name={RouteConstants.CREATE_RECIPE_SCREEN}
                    component={CreateRecipeScreen}
                    options={{ ...TransitionPresets.ModalPresentationIOS }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default RootStackNavigator;
