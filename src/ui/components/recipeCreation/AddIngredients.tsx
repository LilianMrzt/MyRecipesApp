import Icons from '@assets/Icons';
import CustomButton from '@components/CustomButton';
import RouteConstants from '@constants/RouteConstants';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddIngredients = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = closeRecipeModalStyle(colors);

    return (
        <View style={styles.container}>
            <CustomButton
                icon={
                    <Ionicons
                        name={Icons.add}
                        color={colors.onPrimary}
                        size={20}
                    />
                }
                onPress={() => {
                    navigation.navigate(RouteConstants.ADD_INGREDIENT_MODAL);
                }}
                label={I18n.t('AddIngredient')}
                padding={10}
                backgroundColor={colors.primary}
                textColor={colors.onPrimary}
                style={styles.rightButton}
            />
        </View>
    );
};

const closeRecipeModalStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            marginTop: 30,
            width: '100%',
            alignItems: 'center'
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

export default AddIngredients;
