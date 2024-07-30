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

export const Loading = {
  args: {
    label: 'Button',
    loading: true,
  },
};

export const Disabled = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const Outlined = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};

export const Text = {
  args: {
    label: 'Button',
    variant: 'text',
  },
};

export const Elevated = {
  args: {
    label: 'Button',
    variant: 'elevated',
  },
};

export const Tonal = {
  args: {
    label: 'Button',
    variant: 'tonal',
  },
};

export const Flat = {
  args: {
    label: 'Button',
    variant: 'flat',
  },
};

export const Plain = {
  args: {
    label: 'Button',
    variant: 'plain',
  },
};

export const XSmall = {
  args: {
    label: 'Button',
    size: 'x-small',
  },
};

export const Small = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export const Large = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const XLarge = {
  args: {
    label: 'Button',
    size: 'x-large',
  },
};

export const Primary = {
  args: {
    label: 'Button',
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    color: 'secondary',
  },
};

export const Success = {
  args: {
    label: 'Button',
    color: 'success',
  },
};

export const Info = {
  args: {
    label: 'Button',
    color: 'info',
  },
};

export const Warning = {
  args: {
    label: 'Button',
    color: 'warning',
  },
};

export const Error = {
  args: {
    label: 'Button',
    color: 'error',
  },
};

export const XSmallRounded = {
  args: {
    label: 'Button',
    size: 'x-small',
    rounded: 'xs',
  },
};

export const SmallRounded = {
  args: {
    label: 'Button',
    size: 'small',
    rounded: 'sm',
  },
};

export const DefaultRounded = {
  args: {
    label: 'Button',
    size: 'default',
    rounded: 'true',
  },
};

export const LargeRounded = {
  args: {
    label: 'Button',
    size: 'large',
    rounded: 'lg',
  },
};

export const XLargeRounded = {
  args: {
    label: 'Button',
    size: 'x-large',
    rounded: 'xl',
  },
};

export const PillRounded = {
  args: {
    label: 'Button',
    rounded: 'pill',
  },
};

export const CircleRounded = {
  args: {
    label: 'Button',
    rounded: 'circle',
  },
};

export const ShapedRounded = {
  args: {
    label: 'Button',
    rounded: 'shaped',
  },
};

export const CustomElevation = {
  args: {
    label: 'Button',
    elevation: 10,
  },
};
