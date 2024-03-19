import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { ColorKeys, SizeKeys } from '../../../style/style';

/** Button 의 컨트롤 패널의 options 값 지정
 * */
const colorOprions: ColorKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
  argTypes: {
    color: {
      options: colorOprions,
      control: { type: 'select' },
    },
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
  },
};

export default meta;

type ButtonStory = StoryObj<typeof Example>;

export const Green: ButtonStory = {
  args: {
    text: 'button',
    color: 'green',
    size: `md`,
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

export const Red: ButtonStory = {
  args: {
    text: 'button',
    color: 'red',
    size: 'md',
    onClick: () => console.log('잘 작동함'),
  },
};

export const Gray: ButtonStory = {
  args: {
    text: 'button',
    color: 'gray',
    size: 'md',
    onClick: () => console.log('잘 작동함'),
  },
};
