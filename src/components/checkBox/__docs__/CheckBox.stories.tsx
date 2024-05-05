import { Meta, StoryObj } from '@storybook/react';
import { CheckBoxExample } from './CheckBoxExample';
import { ColorThemeKeys, SizeKeys } from '../../../style/style';

const sizeOptions: SizeKeys[] = ['xs', 'sm', 'md', 'lg'];
const colorOptions: ColorThemeKeys[] = ['red', 'green', 'blue', 'gray'];

const CheckBoxMeta: Meta<typeof CheckBoxExample> = {
  title: 'checkBox',
  component: CheckBoxExample,
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
    colorTheme: {
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
    colorTheme: 'green',
  },
};
