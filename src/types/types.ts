import { ReactNode } from "react";

export type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    handleClick?: () => void;
    icon?: ReactNode;
};

export type LogoProps = {
    height?: number;
    width?: number;
    handleClick?: () => void;
}
