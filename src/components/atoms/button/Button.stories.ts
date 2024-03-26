import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import mockButtonProps from './Button.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // vitest: {
    //   testFile: 'Button.test.tsx',
    //   testResults: vitestResults,
    // },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockButtonProps.primary,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Secondary: Story = {
  args: {
    id: 'secondary',
    children: 'Secondary',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Large: Story = {
  args: {
    id: 'large',
    children: 'Large',
  },
};

export const Small: Story = {
  args: {
    id: 'small',
    children: 'Small',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};
