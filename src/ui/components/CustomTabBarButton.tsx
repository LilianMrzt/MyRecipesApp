import Icons from '@assets/Icons';
import { useTheme } from '@react-navigation/native';
import CreateRecipeScreen from '@views/CreateRecipeScreen';
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBarButton = () => {
    const { colors } = useTheme();
    const styles = customTabBarButtonStyle(colors);

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.customButton]}
                    onPress={() => setIsModalVisible(true)}
                >
                    <View style={styles.buttonContent}>
                        <Ionicons
                            name={Icons.add}
                            color={colors.surface}
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                visible={isModalVisible}
                animationType={'slide'}
                onRequestClose={() => setIsModalVisible(false)}
                style={styles.modal}
            >
                <CreateRecipeScreen closeModal={() => setIsModalVisible(false)} />
            </Modal>
        </>
    );
};

const customTabBarButtonStyle = (colors) =>
    StyleSheet.create({
        container: {
            height: 70,
            width: 70,
            backgroundColor: colors.background,
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50
        },
        customButton: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonContent: {
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal: {
            justifyContent: 'flex-end',
            margin: 0
        }
    });

export default CustomTabBarButton;
