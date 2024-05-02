import { Meta, StoryObj } from '@storybook/react';
import { CheckBoxExample } from './CheckBoxExample';
import { SizeKeys } from '../../../style/style';

const isCheckBoxOption: boolean[] = [true, false];
const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];

const CheckBoxMeta: Meta<typeof CheckBoxExample> = {
  title: 'checkBox',
  component: CheckBoxExample,
  argTypes: {
    isChecked: {
      option: isCheckBoxOption,
      control: { type: 'select' },
    },
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
  },
};

export default CheckBoxMeta;

type CheckBoxStory = StoryObj<typeof CheckBoxExample>;

export const Checked: CheckBoxStory = {
  args: {
    name: 'test',
    isChecked: true,
    size: 'md',
  },
};
