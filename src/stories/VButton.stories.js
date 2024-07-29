import { fn } from '@storybook/test';
import VButton from './VButton.vue';

export default {
  title: 'VButton',
  component: VButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['x-small', 'small', 'default', 'large', 'x-large'] },
    color : { control: { type: 'select' }, options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'] },
    border : { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    elevation : { control: { type: 'number' } },
    loading : { control: { type: 'boolean' } },
    variant : { control: { type: 'select' }, options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'] },
    rounded : { control: { type: 'select' }, options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Button',
  },
};
