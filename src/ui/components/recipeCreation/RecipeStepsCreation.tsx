import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import EditableStep from '@components/recipeCreation/EditableStep';
import { useTheme } from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RecipeStepsCreation = () => {
    const { colors } = useTheme();
    const styles = recipeStepsCreationStyle(colors);

    const [steps, setSteps] = useState([
        {
            name: `${I18n.t('Step')} ${1}`,
            content: ''
        }
    ]);

    /**
     * Ajouter une étape au tableau
     */
    const addStep = () => {
        const newStep = {
            name: `${I18n.t('Step')} ${steps.length + 1}`,
            content: ''
        };
        setSteps([...steps, newStep]);
    };

    /**
     * Mettre à jour le contenu des étapes
     * @param index
     * @param content
     */
    const updateStepContent = (index: number, content) => {
        const updatedSteps = [...steps];
        updatedSteps[index].content = content;
        setSteps(updatedSteps);
    };

    /**
     * Supprimer l'étape de la liste
     * @param index
     */
    const deleteStep = (index) => {
        const updatedSteps = [...steps];
        updatedSteps.splice(index, 1);

        // Mise à jour des index
        updatedSteps.forEach((step, index) => {
            step.name = `Etape ${index + 1}`;
        });

        setSteps(updatedSteps);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{I18n.t('Steps')}</Text>
            {steps?.map((step, index) => (
                <EditableStep
                    key={index}
                    step={step}
                    index={index}
                    updateStepContent={updateStepContent}
                    deleteStep={() => deleteStep(index)}
                />
            ))}

            <CustomButton
                icon={
                    <Ionicons
                        name={Icons.add}
                        color={colors.onPrimary}
                        size={20}
                    />
                }
                onPress={addStep}
                label={I18n.t('AddStep')}
                padding={10}
                backgroundColor={colors.primary}
                style={styles.addButton}
                textColor={colors.onPrimary}
            />
        </View>
    );
};

const recipeStepsCreationStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: '100%',
            marginTop: 20,
            alignItems: 'center'
        },
        text: {
            color: colors.onBackground,
            fontSize: 24,
            marginBottom: 10,
            alignSelf: 'flex-start'
        },
        addButton: {
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10
        }
    });

export default RecipeStepsCreation;
