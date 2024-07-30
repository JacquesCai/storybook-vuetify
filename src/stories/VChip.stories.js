
import VChip from "./VChip.vue"

export default {
  title: "VChip",
  component: VChip,
  tags: ["autodocs"],
  argTypes: {
    'append-icon': { control: { type: "text" } },
    border: { control: { type: "select" }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    closable: { control: { type: "boolean" } },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "info", "warning", "error"] },
  },
}

export const Default = {
  args: {
    label: "Chip",
  },
}

export const Closable = {
  args: {
    label: "Chip",
    closable: true,
  },
}

export const Outlined = {
  args: {
    label: "Chip",
    variant: "outlined",
  },
}

export const Text = {
  args: {
    label: "Chip",
    variant: "text",
  },
}

export const Elevated = {
  args: {
    label: "Chip",
    variant: "elevated",
  },
}

export const Pill = {
  args: {
    label: "Chip",
    rounded: "pill",
  },
}

export const Circle = {
  args: {
    label: "Chip",
    rounded: "circle",
  },
}

export const Shaped = {
  args: {
    label: "Chip",
    rounded: "shaped",
  },
}

export const Xs = {
  args: {
    label: "Chip",
    border: "xs",
  },
}

export const Sm = {
  args: {
    label: "Chip",
    border: "sm",
  },
}

export const Md = {
  args: {
    label: "Chip",
    border: "md",
  },
}

export const Lg = {
  args: {
    label: "Chip",
    border: "lg",
  },
}

export const Xl = {
  args: {
    label: "Chip",
    border: "xl",
  },
}

export const Primary = {
  args: {
    label: "Chip",
    color: "primary",
  },
}

export const Secondary = {
  args: {
    label: "Chip",
    color: "secondary",
  },
}

export const Success = {
  args: {
    label: "Chip",
    color: "success",
  },
}

export const Info = {
  args: {
    label: "Chip",
    color: "info",
  },
}

export const Warning = {
  args: {
    label: "Chip",
    color: "warning",
  },
}

export const Error = {
  args: {
    label: "Chip",
    color: "error",
  },
}

export const AppendIcon = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
  },
}

export const AppendIconClosable = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    closable: true,
  },
}

export const AppendIconOutlined = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    variant: "outlined",
  },
}

export const AppendIconText = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    variant: "text",
  },
}

export const AppendIconElevated = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    variant: "elevated",
  },
}

export const AppendIconPill = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    rounded: "pill",
  },
}

export const AppendIconCircle = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    rounded: "circle",
  },
}

export const AppendIconShaped = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    rounded: "shaped",
  },
}

export const AppendIconXs = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    border: "xs",
  },
}

export const AppendIconSm = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    border: "sm",
  },
}

export const AppendIconMd = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    border: "md",
  },
}

export const AppendIconLg = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    border: "lg",
  },
}

export const AppendIconXl = {
  args: {
    label: "Chip",
    'append-icon': "mdi-close",
    border: "xl",
  },
}
