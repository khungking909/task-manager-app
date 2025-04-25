import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/common/components/Atom/Typography/Typography';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Typography> = {
  title: 'Atom/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: '',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'text'],
      control: { type: 'select' },
    },
    color: {
      options: ['#eccc68', '#ff4757', '#2f3542', '#1e90ff', '#2ed573', '#ced6e0'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Typography',
  },
};
