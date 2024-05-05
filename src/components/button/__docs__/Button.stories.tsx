import type { Meta, StoryObj } from '@storybook/react';
import { ColorThemeKeys, SizeKeys, VariantKeys } from '../../../style/style';
import Example from './Example';

/** Button 의 컨트롤 패널의 options 값 지정
 * */
const colorOptions: ColorThemeKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
  argTypes: {
    colorTheme: {
      options: colorOptions,
      control: { type: 'select' },
    },
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
    variants: {
      options: variantOptions,
      control: { type: 'select' },
    },
  },
};

export default meta;

type ButtonStory = StoryObj<typeof Example>;

export const Green: ButtonStory = {
  args: {
    text: 'button',
    colorTheme: 'green',
    size: `md`,
    variants: 'filledContrast',
    onClick: () => console.log('잘 작동함'),
  },
};

export const Blue: ButtonStory = {
  args: {
    text: 'button',
    colorTheme: 'blue',
    size: 'md',
    variants: 'filledContrast',
    onClick: () => console.log('잘 작동함'),
  },
};

export const Red: ButtonStory = {
  args: {
    text: 'button',
    colorTheme: 'red',
    size: 'md',
    variants: 'filledContrast',
    onClick: () => console.log('잘 작동함'),
  },
};

export const Gray: ButtonStory = {
  args: {
    text: 'button',
    colorTheme: 'gray',
    size: 'md',
    variants: 'filledContrast',
    onClick: () => console.log('잘 작동함'),
  },
};
