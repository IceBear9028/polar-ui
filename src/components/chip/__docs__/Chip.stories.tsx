import type { Meta, StoryObj } from '@storybook/react';
import ChipExample from './ChipExample';
import { ColorThemeKeys, SizeKeys, VariantKeys } from '../../../style/style';

const colorOptions: ColorThemeKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['sm', 'md'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];

const ChipMeta: Meta<typeof ChipExample> = {
  title: 'Chip',
  component: ChipExample,
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

export default ChipMeta;

type ChipStory = StoryObj<typeof ChipExample>;

export const Green: ChipStory = {
  args: {
    name: 'Chip',
    colorTheme: 'green',
    size: `md`,
    variants: 'filledContrast',
  },
};

export const Blue: ChipStory = {
  args: {
    name: 'Chip',
    colorTheme: 'blue',
    size: 'md',
    variants: 'filledContrast',
  },
};

export const Red: ChipStory = {
  args: {
    name: 'Chip',
    colorTheme: 'red',
    size: 'md',
    variants: 'filledContrast',
  },
};

export const Gray: ChipStory = {
  args: {
    name: 'Chip',
    colorTheme: 'gray',
    size: 'md',
    variants: 'filledContrast',
  },
};
