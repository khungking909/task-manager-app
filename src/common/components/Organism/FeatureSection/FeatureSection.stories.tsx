import { FeatureSection } from '@components/Organism/FeatureSection/FeatureSection';
import type { Meta, StoryObj } from '@storybook/react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FeatureSection> = {
  title: 'Organism/FeatureSection',
  component: FeatureSection,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
