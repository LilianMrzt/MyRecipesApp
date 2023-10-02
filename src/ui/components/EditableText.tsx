import Icons from '@assets/Icons';
import { EditableTextProps } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditableText: FC<EditableTextProps> = ({
    placeholder,
    fontSize = 14,
    fontWeight = 'normal',
    style
}) => {
    const { colors } = useTheme();
    const styles = editableTextStyle(colors);

    const [inputedText, setInputedText] = useState('');

    return (
        <View style={[styles.container, style]}>
            <Ionicons
                name={Icons.edit}
                color={colors.onBackground}
                size={24}
            />
            <TextInput
                onChangeText={(text) => setInputedText(text)}
                value={inputedText}
                style={[styles.input, { fontSize: fontSize, fontWeight: fontWeight }]}
                placeholder={placeholder}
                placeholderTextColor={colors.onBackground}
                multiline={true}
            />
        </View>
    );
};

const editableTextStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        input: {
            color: colors.onBackground,
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10
        }
    });

export default EditableText;
