import type { Meta, StoryObj } from '@storybook/react';
import Color from './Color';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Style Guides/Color',
  component: Color,
  parameters: {
    // vitest: {
    //   testFile: 'Button.test.tsx',
    //   testResults: vitestResults,
    // },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Color>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {};
