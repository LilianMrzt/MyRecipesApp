import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomSheet = ({ children, backgroundColor }) => {
    const navigation = useNavigation();
    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    const insets = useSafeAreaInsets();

    useEffect(() => {
        slideUp();
    }, []);

    /**
     * Permet de gérer l'action de retour du téléphone afin d'afficher la popup d'alerte
     */
    useEffect(
        () =>
            navigation.addListener('beforeRemove', () => {
                slideDown();
            }),
        [navigation]
    );

    /**
     * Animation de slide vers le haut
     */
    const slideUp = () => {
        Animated.timing(slideAnim, {
            toValue: Dimensions.get('window').height / 2,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    /**
     * Animation de slide vers le bas
     */
    const slideDown = () => {
        Animated.timing(slideAnim, {
            toValue: Dimensions.get('window').height,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    return (
        <Animated.View
            style={{
                backgroundColor: backgroundColor,
                padding: 20,
                width: '100%',
                paddingBottom: insets.bottom,
                transform: [
                    {
                        translateY: slideAnim.interpolate({
                            inputRange: [
                                Dimensions.get('window').height / 2,
                                Dimensions.get('window').height
                            ],
                            outputRange: [0, Dimensions.get('window').height / 2]
                        })
                    }
                ],
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}
        >
            {children}
        </Animated.View>
    );
};

export default BottomSheet;
