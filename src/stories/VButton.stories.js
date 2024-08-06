import { VBtn } from 'vuetify/components/VBtn'
import { userEvent, waitFor, within, expect, fn } from '@storybook/test'

export default {
  title: 'VButton',
  component: VBtn,
  tags: ['autodocs'],
  argTypes: {
    text: { control: { type: 'text' }, defaultValue: 'Button' },
    size: { control: { type: 'select' }, options: ['x-small', 'small', 'default', 'large', 'x-large'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'] },
    border: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    elevation: { control: { type: 'number' } },
    loading: { control: { type: 'boolean' } },
    variant: { control: { type: 'select' }, options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'] },
    rounded: { control: { type: 'select' }, options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'] },
    icon: { control: { type: 'text' } },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    text: 'Button',
    color: "primary",
    size: "default"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/l2jyZ8TPCKFU4a4uv30i1o/Untitled?node-id=0-1&t=nHyJYhRkdNEiunZ9-1",
    },
  },
}

export const Loading = {
  args: {
    text: 'Button',
    loading: true,
  },
}

export const Disabled = {
  args: {
    text: 'Button',
    disabled: true,
  },
}

export const Outlined = {
  args: {
    text: 'Button',
    variant: 'outlined',
  },
}

export const Text = {
  args: {
    text: 'Button',
    variant: 'text',
  },
}

export const Elevated = {
  args: {
    text: 'Button',
    variant: 'elevated',
  },
}

export const Tonal = {
  args: {
    text: 'Button',
    variant: 'tonal',
  },
}

export const Flat = {
  args: {
    text: 'Button',
    variant: 'flat',
  },
}

export const Plain = {
  args: {
    text: 'Button',
    variant: 'plain',
  },
}

export const XSmall = {
  args: {
    text: 'Button',
    size: 'x-small',
  },
}

export const Small = {
  args: {
    text: 'Button',
    size: 'small',
  },
}

export const Large = {
  args: {
    text: 'Button',
    size: 'large',
  },
}

export const XLarge = {
  args: {
    text: 'Button',
    size: 'x-large',
  },
}

export const Primary = {
  args: {
    text: 'Button',
    color: 'primary',
  },
}

export const Secondary = {
  args: {
    text: 'Button',
    color: 'secondary',
  },
}

export const Success = {
  args: {
    text: 'Button',
    color: 'success',
  },
}

export const Info = {
  args: {
    text: 'Button',
    color: 'info',
  },
}

export const Warning = {
  args: {
    text: 'Button',
    color: 'warning',
  },
}

export const Error = {
  args: {
    text: 'Button',
    color: 'error',
  },
}

export const XSmallRounded = {
  args: {
    text: 'Button',
    size: 'x-small',
    rounded: 'xs',
  },
}

export const SmallRounded = {
  args: {
    text: 'Button',
    size: 'small',
    rounded: 'sm',
  },
}

export const DefaultRounded = {
  args: {
    text: 'Button',
    size: 'default',
    rounded: 'true',
  },
}

export const LargeRounded = {
  args: {
    text: 'Button',
    size: 'large',
    rounded: 'lg',
  },
}

export const XLargeRounded = {
  args: {
    text: 'Button',
    size: 'x-large',
    rounded: 'xl',
  },
}

export const PillRounded = {
  args: {
    text: 'Button',
    rounded: 'pill',
  },
}

export const CircleRounded = {
  args: {
    text: 'Button',
    rounded: 'circle',
  },
}

export const ShapedRounded = {
  args: {
    text: 'Button',
    rounded: 'shaped',
  },
}

export const CustomElevation = {
  args: {
    text: 'Button',
    elevation: 10,
  },
}

export const WithIcon = {
  args: {
    text: 'Button',
    icon: 'mdi-heart',
  },
}

export const WithSlot = {
  render: (args) => ({
    components: { VBtn },
    setup () {
      return {
        args,
      }
    },
    template: '<VBtn v-bind="args"> <i>Custom slot</i> </VBtn>',
  }),
}

export const Click = {
  args: {
    text: 'Button',
  },
  play: async ({ context, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    userEvent.click(button)
    await waitFor(() => expect(context.args.onClick).toHaveBeenCalled())
  },
}

export const DefaultFigma = {
  args: {
    text: "Button2",
    size: "x-large"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/l2jyZ8TPCKFU4a4uv30i1o/Untitled?node-id=15-4&t=iu5B2pwjxDwlEGY0-0"
    }
  }
}
