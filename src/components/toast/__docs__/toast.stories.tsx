import { Meta, StoryObj } from '@storybook/react';
import ToastExample from './toastExample';
import { ToastStatus } from '../Toast';

const ToastStatusOption: ToastStatus[] = ['success', 'error', 'info'];
const ToastClosableOption: boolean[] = [true, false];

const ToastMeta: Meta<typeof ToastExample> = {
  title: 'toast',
  component: ToastExample,
  argTypes: {
    isCloseable: {
      options: ToastClosableOption,
      control: { type: 'select' },
    },
    status: {
      options: ToastStatusOption,
      control: { type: 'select' },
    },
  },
};

export default ToastMeta;

type ToastStory = StoryObj<typeof ToastExample>;

export const Success: ToastStory = {
  args: {
    isCloseable: true,
    status: 'success',
    title: '',
    description: '',
    duration: 5000,
  },
};

export const Error: ToastStory = {
  args: {
    isCloseable: true,
    status: 'error',
    title: '',
    description: '',
    duration: 5000,
  },
};

export const Info: ToastStory = {
  args: {
    isCloseable: true,
    status: 'info',
    title: '',
    description: '',
    duration: 5000,
  },
};
