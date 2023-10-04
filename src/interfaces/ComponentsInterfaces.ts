import { Step } from '@interfaces/ObjectsInterfaces';
import { ReactElement, ReactNode } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";

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

export interface EditableStepProps {
    step: Step;
    index: number;
    updateStepContent: (index: number, text: string) => void;
    deleteStep: () => void;
    numberOfSteps: number;
}

export interface CustomTabBarButtonPros {
    children?: ReactNode;
    onPress?: (e: any | GestureResponderEvent) => void;
}
