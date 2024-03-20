import React, { type ComponentPropsWithRef } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { type VariantProps } from 'class-variance-authority';
import buttonStyles from './helpers';
type ButtonElementProps = ComponentPropsWithRef<'button'>;
export interface ButtonProps extends ButtonElementProps, VariantProps<typeof buttonStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
}
export default function Button({ className, buttonType, size, rounded, label, rightIcon, spacing, leftIcon, ...props }: ButtonProps): import('../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
