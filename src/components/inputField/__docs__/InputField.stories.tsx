import { ColorThemeKeys, SizeKeys, VariantKeys } from '../../../style/style';
import { Meta, StoryObj } from '@storybook/react';
import InputFieldExample from './InputFieldExample';

const colorOptions: ColorThemeKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];

const InputFieldMeta: Meta<typeof InputFieldExample> = {
  title: 'InputField',
  component: InputFieldExample,
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

export default InputFieldMeta;

type InputFieldStory = StoryObj<typeof InputFieldExample>;

export const Green: InputFieldStory = {
  args: {
    value: 'InputField',
    colorTheme: 'green',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    isReadOnly: false,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Blue: InputFieldStory = {
  args: {
    value: 'InputField',
    colorTheme: 'blue',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    isReadOnly: false,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Red: InputFieldStory = {
  args: {
    value: 'InputField',
    colorTheme: 'red',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    isReadOnly: false,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Gray: InputFieldStory = {
  args: {
    value: 'InputField',
    colorTheme: 'gray',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    isReadOnly: false,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};
