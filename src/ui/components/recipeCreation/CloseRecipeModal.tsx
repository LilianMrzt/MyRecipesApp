import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import RouteConstants from '@constants/RouteConstants';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CloseRecipeModal = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = closeRecipeModalStyle(colors);

    return (
        <View style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Ionicons
                        name={Icons.warning}
                        color={colors.onPrimary}
                        size={20}
                    />
                    <Text style={styles.warningText}>{I18n.t('Warning')}</Text>
                </View>

                <Text style={styles.infoText}>{I18n.t('CloseRecipeCreationWarning')}</Text>
                <View style={styles.buttonsContainer}>
                    <CustomButton
                        onPress={() => navigation.goBack()}
                        label={I18n.t('Cancel')}
                        padding={10}
                        backgroundColor={colors.surface}
                        textColor={colors.secondary}
                        elevation={0}
                        style={styles.leftButton}
                    />
                    <CustomButton
                        onPress={() => navigation.navigate(RouteConstants.HOME_SCREEN)}
                        label={I18n.t('Confirm')}
                        padding={10}
                        backgroundColor={colors.primary}
                        textColor={colors.onPrimary}
                        style={styles.rightButton}
                    />
                </View>
            </View>
        </View>
    );
};

const closeRecipeModalStyle = (colors: any) =>
    StyleSheet.create({
        modal: {
            justifyContent: 'center',
            padding: 30,
            alignItems: 'center',
            backgroundColor: '#00000066',
            flex: 1
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
        },
        container: {
            padding: 20,
            backgroundColor: colors.surface,
            borderRadius: 10
        },
        warningText: {
            color: colors.onSurface,
            marginLeft: 5,
            fontSize: 18
        },
        infoText: {
            color: colors.onSurface
        },
        buttonsContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'flex-end'
        },
        leftButton: {
            marginRight: 10,
            paddingLeft: 20,
            paddingRight: 20
        },
        rightButton: {
            paddingLeft: 20,
            paddingRight: 20
        }
    });

export default CloseRecipeModal;
