import AddIngredientModal from '@components/recipeCreation/AddIngredientModal';
import CloseRecipeModal from '@components/recipeCreation/CloseRecipeModal';
import RouteConstants from '@constants/RouteConstants';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import CreateRecipeScreen from '@views/CreateRecipeScreen';
import React from 'react';

const Stack = createStackNavigator();

const CreateRecipeStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
                headerShown: false
            }}
        >
            <Stack.Screen
                name={RouteConstants.CREATE_RECIPE_SCREEN}
                component={CreateRecipeScreen}
            />
            <Stack.Screen
                name={RouteConstants.CLOSE_RECIPE_MODAL}
                component={CloseRecipeModal}
                options={{ presentation: 'transparentModal' }}
            />
            <Stack.Screen
                name={RouteConstants.ADD_INGREDIENT_MODAL}
                component={AddIngredientModal}
                options={{
                    presentation: 'transparentModal',
                    ...TransitionPresets.ModalFadeTransition
                }}
            />
            <Stack.Screen
                name={RouteConstants.ADD_INGREDIENT_MODAL2}
                component={AddIngredientModal}
                options={{
                    presentation: 'transparentModal',
                    ...TransitionPresets.ModalFadeTransition
                }}
            />
        </Stack.Navigator>
    );
};

export default CreateRecipeStackNavigation;
