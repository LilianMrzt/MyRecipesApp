import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditableStep = ({ step, index, updateStepContent, deleteStep }) => {
    const { colors } = useTheme();
    const styles = editableStepStyle(colors);

    /**
     * Modifier le contenu du texte quand l'utilisateur entre la description d'une étape
     * @param text
     */
    const handleChangeText = (text: string) => {
        updateStepContent(index, text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.informationsView}>
                <Text style={styles.stepText}>{step.name}</Text>
                <CustomButton
                    icon={
                        <Ionicons
                            name={Icons.trash}
                            color={colors.onTertiary}
                            size={20}
                        />
                    }
                    onPress={deleteStep}
                    backgroundColor={colors.surface}
                    elevation={0}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholderTextColor={colors.onBackground}
                onChangeText={handleChangeText}
                value={step.content}
                multiline={true}
            />
        </View>
    );
};

const editableStepStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.surface,
            width: '100%',
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            padding: 10,
            elevation: 1
        },
        stepText: {
            color: colors.onBackground
        },
        input: {
            color: colors.onBackground
        },
        informationsView: {
            //backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    });

export default EditableStep;
