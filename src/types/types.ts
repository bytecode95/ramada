export type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    handleClick?: () => void;
};

export type LogoProps = {
    height?: number;
    width?: number;
    handleClick?: () => void;
}
