import { IconButtonProps } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomButton: FC<IconButtonProps> = ({
    icon,
    onPress,
    style,
    backgroundColor,
    elevation = 1,
    padding = 0,
    label,
    textColor
}) => {
    const { colors } = useTheme();
    const styles = iconButtonStyle();

    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                {
                    backgroundColor: backgroundColor ?? colors.background,
                    elevation: elevation,
                    padding: padding
                }
            ]}
            onPress={onPress}
        >
            <View style={styles.container}>
                {icon}
                {label && (
                    <Text style={[{ color: textColor }, icon && { marginLeft: 10 }]}>{label}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const iconButtonStyle = () =>
    StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50
        },
        container: {
            display: 'flex',
            flexDirection: 'row'
        }
    });

export default CustomButton;
