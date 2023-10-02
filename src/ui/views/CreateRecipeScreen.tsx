import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import EditableText from '@components/EditableText';
import RecipeStepsCreation from '@components/recipeCreation/RecipeStepsCreation';
import { useTheme } from '@react-navigation/native';
import Images from '@resources/images/Images';
import I18n from '@utils/I18n';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateRecipeScreen = ({ closeModal }) => {
    const { colors } = useTheme();
    const styles = createRecipeScreenStyle(colors);

    return (
        <View style={{ flex: 1 }}>
            <CustomButton
                icon={
                    <Ionicons
                        name={Icons.close}
                        color={colors.onTertiary}
                        size={30}
                    />
                }
                style={styles.closeButton}
                onPress={closeModal}
                backgroundColor={colors.tertiary}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={Images.hotPot}
                    style={styles.image}
                />
                <View style={{ padding: 20, width: '100%', alignItems: 'flex-start' }}>
                    <EditableText
                        placeholder={I18n.t('NewRecipe')}
                        fontSize={24}
                    />
                    <RecipeStepsCreation />
                </View>
            </ScrollView>
        </View>
    );
};

const createRecipeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
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
