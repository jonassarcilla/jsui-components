/**
 * Button styles for the Button component.
 */
declare const buttonStyles: (props?: ({
    buttonType?: "primary" | "secondary" | "warning" | "outline" | "disabled" | "error" | null | undefined;
    size?: "default" | "small" | "large" | "xxl" | null | undefined;
    spacing?: "default" | "small" | "large" | "xxl" | null | undefined;
    rounded?: "default" | "xxl" | "sm" | "lg" | "xl" | "none" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export default buttonStyles;
