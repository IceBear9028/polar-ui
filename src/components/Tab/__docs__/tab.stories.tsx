import { Meta, StoryObj } from '@storybook/react';
import TabExample from './tabExample';

const TabMeta: Meta<typeof TabExample> = {
  title: 'tab',
  component: TabExample,
};

export default TabMeta;

type TabStory = StoryObj<typeof TabExample>;

export const TabVariants: TabStory = {
  args: {},
};
