import { Avatar } from '@components/Atom/Avatar/Avatar';
import type { Meta, StoryObj } from '@storybook/react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: 'Atom/Avatar',
  component: Avatar,
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
  args: {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_vfk9BGo057RJEXWkvtcTP03HBfMLiQbUA&s',
  },
};
