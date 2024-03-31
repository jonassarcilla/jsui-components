// import '@/index.css';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import cn from '@/lib/utils';

const buttonVariants = cva(
  'cv-inline-flex cv-items-center cv-justify-center cv-whitespace-nowrap cv-rounded-md cv-text-sm cv-font-medium cv-ring-offset-background cv-transition-colors focus-visible:cv-outline-none focus-visible:cv-ring-2 focus-visible:cv-ring-ring focus-visible:cv-ring-offset-2 disabled:cv-pointer-events-none disabled:cv-opacity-50',
  {
    variants: {
      variant: {
        default:
          'cv-bg-primary cv-text-primary-foreground hover:cv-bg-primary/90',
        destructive:
          'cv-bg-destructive cv-text-destructive-foreground hover:cv-bg-destructive/90',
        outline:
          'cv-border cv-border-input cv-bg-background hover:cv-bg-accent hover:cv-text-accent-foreground',
        secondary:
          'cv-bg-secondary cv-text-secondary-foreground hover:cv-bg-secondary/80',
        ghost: 'hover:cv-bg-accent hover:cv-text-accent-foreground',
        link: 'cv-text-primary cv-underline-offset-4 hover:cv-underline',
      },
      size: {
        default: 'cv-h-10 cv-px-4 cv-py-2',
        sm: 'cv-h-9 cv-rounded-md cv-px-3',
        lg: 'cv-h-11 cv-rounded-md cv-px-8',
        icon: 'cv-h-10 cv-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  id: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ id, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        data-testid={id}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
