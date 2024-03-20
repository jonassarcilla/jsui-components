import { cva } from 'class-variance-authority';

/**
 * Button styles for the Button component.
 */
const buttonStyles = cva(
  'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary:
          'cv-bg-violet-500 cv-text-white cv-border-violet-500 hover:cv-bg-violet-600',
        secondary:
          'cv-bg-gray-200 cv-text-gray-600 cv-border-gray-200 hover:cv-bg-gray-300',
        warning:
          'cv-bg-yellow-500 cv-text-white cv-border-yellow-500 hover:cv-bg-yellow-600',
        outline:
          'cv-bg-white cv-text-gray-600 hover:cv-bg-gray-100 cv-border hover:cv-border-gray-100 cv-border-gray-300 hover:cv-shadow-md',
        disabled:
          'cv-bg-black cv-text-white cv-border-black cv-cursor-not-allowed',
        error:
          'cv-bg-red-500 cv-text-white cv-border-red-500 hover:cv-bg-red-600',
      },
      size: {
        default: ['cv-text-base'],
        small: ['cv-text-sm'],
        large: ['cv-text-lg'],
        xxl: ['cv-text-2xl'],
      },
      spacing: {
        default: ['cv-py-2', 'cv-px-4'],
        small: ['cv-py-1', 'cv-px-2'],
        large: ['cv-py-3', 'cv-px-6'],
        xxl: ['cv-py-4', 'cv-px-8'],
      },
      rounded: {
        default: 'cv-rounded-md',
        sm: 'cv-rounded-sm',
        lg: 'cv-rounded-lg',
        xl: 'cv-rounded-xl',
        xxl: 'cv-rounded-2xl',
        none: 'cv-rounded-none',
        full: 'cv-rounded-full',
      },
    },
    compoundVariants: [
      {
        buttonType: 'primary',
        size: 'default',
        spacing: 'default',
        rounded: 'default',
      },
    ],
    defaultVariants: {
      buttonType: 'primary',
      size: 'default',
      rounded: 'default',
      spacing: 'default',
    },
  }
);

export default buttonStyles;
