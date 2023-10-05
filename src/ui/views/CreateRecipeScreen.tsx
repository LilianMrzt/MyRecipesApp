import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import EditableText from '@components/EditableText';
import AddIngredients from '@components/recipeCreation/AddIngredients';
import RecipeStepsCreation from '@components/recipeCreation/RecipeStepsCreation';
import RouteConstants from '@constants/RouteConstants';
import { useTheme } from '@react-navigation/native';
import Images from '@resources/images/Images';
import I18n from '@utils/I18n';
import React, { useEffect } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateRecipeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = createRecipeScreenStyle(colors);

    /**
     * Permet de gérer l'action de retour du téléphone afin d'afficher la popup d'alerte
     */
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
                navigation.navigate(RouteConstants.CLOSE_RECIPE_MODAL);
            }),
        [navigation]
    );

    return (
        <View style={styles.container}>
            <CustomButton
                icon={
                    <Ionicons
                        name={Icons.close}
                        color={colors.onTertiary}
                        size={30}
                    />
                }
                style={styles.closeButton}
                onPress={() => navigation.navigate(RouteConstants.CLOSE_RECIPE_MODAL)}
                backgroundColor={colors.tertiary}
            />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image
                    source={Images.hotPot}
                    style={styles.image}
                />
                <View style={{ padding: 20, width: '100%', alignItems: 'flex-start' }}>
                    <EditableText
                        placeholder={I18n.t('NewRecipe')}
                        fontSize={24}
                    />
                    <AddIngredients navigation={navigation} />
                    <RecipeStepsCreation />
                </View>
            </ScrollView>
        </View>
    );
};

const createRecipeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            marginTop: StatusBar.currentHeight
        },
        contentContainer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: colors.background,
            paddingBottom: 40
        },
        closeButton: {
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 2
        },
        image: {
            height: 200,
            width: 200,
            alignSelf: 'flex-end',
            marginTop: 60
        }
    });

export default CreateRecipeScreen;
