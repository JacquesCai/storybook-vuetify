
import { VChip } from 'vuetify/components/VChip'

export default {
  title: "VChip",
  component: VChip,
  tags: ["autodocs"],
  argTypes: {
    text: { control: { type: "text" } },
    'append-icon': { control: { type: "text" } },
    border: { control: { type: "select" }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    closable: { control: { type: "boolean" } },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "info", "warning", "error"] },
  },
}

export const Default = {
  args: {
    text: "Chip",
  },
}

export const Closable = {
  args: {
    text: "Chip",
    closable: true,
  },
}

export const Outlined = {
  args: {
    text: "Chip",
    variant: "outlined",
  },
}

export const Text = {
  args: {
    text: "Chip",
    variant: "text",
  },
}

export const Elevated = {
  args: {
    text: "Chip",
    variant: "elevated",
  },
}

export const Pill = {
  args: {
    text: "Chip",
    rounded: "pill",
  },
}

export const Circle = {
  args: {
    text: "Chip",
    rounded: "circle",
  },
}

export const Shaped = {
  args: {
    text: "Chip",
    rounded: "shaped",
  },
}

export const Xs = {
  args: {
    text: "Chip",
    border: "xs",
  },
}

export const Sm = {
  args: {
    text: "Chip",
    border: "sm",
  },
}

export const Md = {
  args: {
    text: "Chip",
    border: "md",
  },
}

export const Lg = {
  args: {
    text: "Chip",
    border: "lg",
  },
}

export const Xl = {
  args: {
    text: "Chip",
    border: "xl",
  },
}

export const Primary = {
  args: {
    text: "Chip",
    color: "primary",
  },
}

export const Secondary = {
  args: {
    text: "Chip",
    color: "secondary",
  },
}

export const Success = {
  args: {
    text: "Chip",
    color: "success",
  },
}

export const Info = {
  args: {
    text: "Chip",
    color: "info",
  },
}

export const Warning = {
  args: {
    text: "Chip",
    color: "warning",
  },
}

export const Error = {
  args: {
    text: "Chip",
    color: "error",
  },
}

export const AppendIcon = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
  },
}

export const AppendIconClosable = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    closable: true,
  },
}

export const AppendIconOutlined = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    variant: "outlined",
  },
}

export const AppendIconText = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    variant: "text",
  },
}

export const AppendIconElevated = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    variant: "elevated",
  },
}

export const AppendIconPill = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    rounded: "pill",
  },
}

export const AppendIconCircle = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    rounded: "circle",
  },
}

export const AppendIconShaped = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    rounded: "shaped",
  },
}

export const AppendIconXs = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    border: "xs",
  },
}

export const AppendIconSm = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    border: "sm",
  },
}

export const AppendIconMd = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    border: "md",
  },
}

export const AppendIconLg = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    border: "lg",
  },
}

export const AppendIconXl = {
  args: {
    text: "Chip",
    'append-icon': "mdi-close",
    border: "xl",
  },
}
