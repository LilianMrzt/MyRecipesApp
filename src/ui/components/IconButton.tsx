import { IconButtonProps } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const IconButton: FC<IconButtonProps> = ({
    icon,
    onPress,
    style,
    backgroundColor,
    elevation = 1,
    padding = 0,
    size
}) => {
    const { colors } = useTheme();
    const iconSize = icon.props.size;
    const buttonSize = size ? size : iconSize + 10;
    const styles = iconButtonStyle();

    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                {
                    height: buttonSize,
                    width: buttonSize,
                    backgroundColor: backgroundColor ?? colors.background,
                    elevation: elevation,
                    padding: padding
                }
            ]}
            onPress={onPress}
        >
            {icon}
        </TouchableOpacity>
    );
};

const iconButtonStyle = () =>
    StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50
        }
    });

export default IconButton;
