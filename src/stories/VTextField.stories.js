import { VTextField } from 'vuetify/components/VTextField';

export default {
  title: 'VTextField',
  component: VTextField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    variant: { control: { type: 'select' }, options: ['standard', 'outlined', 'filled'] },
  },
};

export const Default = {
  args: {
    label: 'TextField',
  },
};
