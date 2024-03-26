import type { Meta, StoryObj } from '@storybook/react';
import ChipExample from './ChipExample';
import { ColorKeys, SizeKeys, VariantKeys } from '../../../style/style';

const colorOprions: ColorKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];

const ChipMeta: Meta<typeof ChipExample> = {
  title: 'Chip',
  component: ChipExample,
  argTypes: {
    color: {
      options: colorOprions,
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
    color: 'green',
    size: `md`,
    variants: 'filledContrast',
  },
};

export const Blue: ChipStory = {
  args: {
    name: 'Chip',
    color: 'blue',
    size: 'md',
    variants: 'filledContrast',
  },
};

export const Red: ChipStory = {
  args: {
    name: 'Chip',
    color: 'red',
    size: 'md',
    variants: 'filledContrast',
  },
};

export const Gray: ChipStory = {
  args: {
    name: 'Chip',
    color: 'gray',
    size: 'md',
    variants: 'filledContrast',
  },
};
