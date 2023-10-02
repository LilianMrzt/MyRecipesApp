import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';

export interface IconButtonProps {
    icon: ReactElement<any, any>;
    onPress: () => void;
    style?: ViewStyle;
    backgroundColor?: string;
    elevation?: number;
    padding?: number;
    label?: string;
    textColor?: string;
}

export interface EditableTextProps {
    placeholder: string;
    fontSize?: number;
    fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    style?: ViewStyle;
}
