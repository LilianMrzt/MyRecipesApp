import BottomSheet from '@components/BottomSheet';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddIngredientModal = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = addIngredientModalStyle(colors);

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={() => navigation.goBack()}
        >
            <BottomSheet backgroundColor={colors.surface}>
                <Text>Test</Text>
                <Button
                    title={'Test'}
                    onPress={() => navigation.goBack()}
                />
            </BottomSheet>
        </TouchableOpacity>
    );
};

const addIngredientModalStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#00000066',
            flex: 1
        }
    });

export default AddIngredientModal;
