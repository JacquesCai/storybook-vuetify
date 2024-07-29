import VSelect from './VSelect.vue';

export default {
  title: 'VSelect',
  component: VSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    variant: { control: { type: 'select' }, options: ['standard', 'outlined', 'filled'] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'VSelect',
  },
};
