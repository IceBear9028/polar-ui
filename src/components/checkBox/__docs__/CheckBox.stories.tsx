import { Meta, StoryObj } from '@storybook/react';
import { CheckBoxExample } from './CheckBoxExample';
import { ColorKeys, SizeKeys } from '../../../style/style';

const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const colorOptions: ColorKeys[] = ['red', 'green', 'blue', 'gray'];

const CheckBoxMeta: Meta<typeof CheckBoxExample> = {
  title: 'checkBox',
  component: CheckBoxExample,
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
    },
  },
};

export default CheckBoxMeta;

type CheckBoxStory = StoryObj<typeof CheckBoxExample>;

export const Checked: CheckBoxStory = {
  args: {
    name: 'test',
    isChecked: false,
    size: 'md',
  },
};
