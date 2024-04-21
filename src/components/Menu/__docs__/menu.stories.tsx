import { Meta, StoryObj } from '@storybook/react';
import MenuExample from './menuExample';

const MenuMeta: Meta<typeof MenuExample> = {
  title: 'Menu',
  component: MenuExample,
};

export default MenuMeta;

type MenuStory = StoryObj<typeof MenuExample>;

export const Variants: MenuStory = {
  args: {},
};
