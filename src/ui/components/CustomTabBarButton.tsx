import { CustomTabBarButtonPros } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CustomTabBarButton: FC<CustomTabBarButtonPros> = ({ children, onPress }) => {
    const { colors } = useTheme();
    const styles = customTabBarButtonStyle(colors);

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.customButton]}
                    onPress={onPress}
                >
                    <View style={styles.buttonContent}>{children}</View>
                </TouchableOpacity>
            </View>
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
        }
    });

export default CustomTabBarButton;
