import { ColorThemeKeys, SizeKeys, VariantKeys } from '../../../style/style';
import { Meta, StoryObj } from '@storybook/react';
import SelectExample from './selectExample';

const colorOptions: ColorThemeKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];
const isRequiredOptions: boolean[] = [true, false];
const isDisabledOptions: boolean[] = [true, false];
const isErrorOptions: boolean[] = [true, false];

const SelectOptions = [
  { value: 'a', name: 'a' },
  { value: 'b', name: 'b' },
  { value: 'c', name: 'c' },
];

const SelectMeta: Meta<typeof SelectExample> = {
  title: 'Select',
  component: SelectExample,
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
    isRequired: {
      options: isRequiredOptions,
      control: { type: 'select' },
    },
    isDisabled: {
      options: isDisabledOptions,
      control: { type: 'select' },
    },
    isError: {
      options: isErrorOptions,
      control: { type: 'select' },
    },
  },
};

export default SelectMeta;

type SelectStory = StoryObj<typeof SelectExample>;

export const Green: SelectStory = {
  args: {
    value: 'InputField',
    colorTheme: 'green',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    placeholder: 'none',
    errorMessage: '',
    option: SelectOptions,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Red: SelectStory = {
  args: {
    value: 'InputField',
    colorTheme: 'red',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    placeholder: 'none',
    errorMessage: '',
    option: SelectOptions,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Blue: SelectStory = {
  args: {
    value: 'InputField',
    colorTheme: 'blue',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    placeholder: 'none',
    errorMessage: '',
    option: SelectOptions,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};

export const Gray: SelectStory = {
  args: {
    value: 'InputField',
    colorTheme: 'gray',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    placeholder: 'none',
    errorMessage: '',
    option: SelectOptions,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};
