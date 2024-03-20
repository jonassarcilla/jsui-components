import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentPropsWithRef, useId } from 'react';
import checkBoxStyles from './helper';

type CheckboxElementProps = ComponentPropsWithRef<'input'>;

interface CheckboxProps
  extends CheckboxElementProps,
    VariantProps<typeof checkBoxStyles> {
  label: string;
}

export default function Checkbox({
  label,
  className,
  inputSize,
  rounded,
  intent,
  ...props
}: CheckboxProps) {
  const checkboxId = `checkbox-${useId()}`;

  return (
    <label
      className="cv-flex cv-flex-row cv-items-center cv-font-medium cv-text-gray-500 cv-cursor-pointer cv-select-none hover:cv-text-gray-700 cv-group cv-gap-x-2"
      htmlFor={checkboxId}
    >
      <input
        className={clsx(
          className,
          checkBoxStyles({ inputSize, rounded, intent })
        )}
        id={checkboxId}
        {...props}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}
