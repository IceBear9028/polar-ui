import { ColorKeys, SizeKeys, VariantKeys } from '../../../style/style';
import { Meta, StoryObj } from '@storybook/react';
import InputFieldExample from './InputFieldExample';

const colorOptions: ColorKeys[] = ['red', 'green', 'blue', 'gray'];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const variantOptions: VariantKeys[] = ['filledContrast', 'filled', 'outlined'];
const isRequiredOptions: boolean[] = [true, false];
const isReadOnlyOptions: boolean[] = [true, false];
const isDisabledOptions: boolean[] = [true, false];
const isErrorOptions: boolean[] = [true, false];

const InputFieldMeta: Meta<typeof InputFieldExample> = {
  title: 'InputField',
  component: InputFieldExample,
  argTypes: {
    color: {
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
    isReadOnly: {
      options: isReadOnlyOptions,
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

export default InputFieldMeta;

type InputFieldStory = StoryObj<typeof InputFieldExample>;

export const Green: InputFieldStory = {
  args: {
    value: 'InputField',
    color: 'green',
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
    color: 'blue',
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
    color: 'red',
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
    color: 'gray',
    size: 'md',
    label: 'label',
    variants: 'outlined',
    isReadOnly: false,
    isDisabled: false,
    isError: false,
    isRequired: false,
  },
};
