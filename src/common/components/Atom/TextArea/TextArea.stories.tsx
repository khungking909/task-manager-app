import { TextArea } from '@components/Atom/TextArea/TextArea';
import type { Meta, StoryObj } from '@storybook/react';
import storyBookClass from './TextArea.module.scss';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextArea> = {
  title: 'Atom/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <div className={storyBookClass.storybook}>
        <Story />
      </div>
    ),
  ],
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
    placeholder: 'Input',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Contained
 */
export const Contained: Story = {
  decorators: [
    (Story) => (
      <div className={storyBookClass.contained}>
        <Story />
      </div>
    ),
  ],
  args: {},
};

/**
 * Disabled
 */
export const DisabledContained: Story = {
  decorators: [
    (Story) => (
      <div className={storyBookClass.contained}>
        <Story />
      </div>
    ),
  ],
  args: {
    disable: true,
  },
};

/**
 * Error message Contained
 */
export const ErrorMessageContained: Story = {
  decorators: [
    (Story) => (
      <div className={storyBookClass.contained}>
        <Story />
      </div>
    ),
  ],
  args: {
    errorMessage: 'Error message',
  },
};

/**
 * Line
 */
export const Line: Story = {
  args: {
    placeholder: 'Input',
    variant: 'line',
  },
};

/**
 * Disabled
 */
export const DisabledLine: Story = {
  args: {
    disable: true,
    variant: 'line',
  },
};

/**
 * Error message Line
 */
export const ErrorMessageLine: Story = {
  args: {
    errorMessage: 'Error message',
    variant: 'line',
  },
};
