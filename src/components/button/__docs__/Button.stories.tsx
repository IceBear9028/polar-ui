import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;

type ButtonStory = StoryObj<typeof Example>;

export const Green: ButtonStory = {
  args: {
    text: 'button',
    color: 'green',
    size: 'md',
    onClick: () => console.log('잘 작동함'),
  },
};

export const Blue: ButtonStory = {
  args: {
    text: 'button',
    color: 'blue',
    size: 'md',
    onClick: () => console.log('잘 작동함'),
  },
};
