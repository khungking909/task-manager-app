import { Add } from '@components/Atom/Icon/icons/Add';
import { ArrowRight } from '@components/Atom/Icon/icons/ArrowRight';
import { Input } from '@components/Atom/Input/Input';
import type { Meta, StoryObj } from '@storybook/react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Atom/Input',
  component: Input,
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
  argTypes: {},
  args: {
    placeholder: 'Email',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    prefix: <Add size="xLarge" />,
    suffix: <ArrowRight size="xLarge" />,
  },
};
