import VAlert from "./VAlert.vue";

export default {
  title: "VAlert",
  component: VAlert,
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    border: { control: { type: "select" }, options: [true, "top", "end", "bottom", "start"] },
    closable: { control: { type: "boolean" } },
    density: { control: { type: "select" }, options: ["default", "comfortable", "compact"] },
    type: { control: { type: "select" }, options: ["success", "info", "warning", "error"] },
    rounded: { control: { type: 'select' }, options: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'] },
    prominent: { control: { type: "boolean" } },
    width: { control: { type: "number" } },
    position: { control: { type: "select" }, options: ["static", "relative", "fixed", "absolute", "sticky"] },
  },
}

export const Default = {
  args: {
    label: "Alert",
  },
}

export const Closable = {
  args: {
    label: "Alert",
    closable: true,
  },
}

export const Outlined = {
  args: {
    label: "Alert",
    variant: "outlined",
  },
}

export const Text = {
  args: {
    label: "Alert",
    variant: "text",
  },
}

export const Elevated = {
  args: {
    label: "Alert",
    variant: "elevated",
  },
}

export const Pill = {
  args: {
    label: "Alert",
    rounded: "pill",
  },
}

export const Circle = {
  args: {
    label: "Alert",
    rounded: "circle",
  },
}

export const Shaped = {
  args: {
    label: "Alert",
    rounded: "shaped",
  },
}

export const Xs = {
  args: {
    label: "Alert",
    rounded: "xs",
  },
}

export const Top = {
  args: {
    label: "Alert",
    border: "top",
  },
}

export const End = {
  args: {
    label: "Alert",
    border: "end",
  },
}

export const Bottom = {
  args: {
    label: "Alert",
    border: "bottom",
  },
}

export const Start = {
  args: {
    label: "Alert",
    border: "start",
  },
}

export const Success = {
  args: {
    label: "Alert",
    type: "success",
  },
}

export const Info = {
  args: {
    label: "Alert",
    type: "info",
  },
}

export const Warning = {
  args: {
    label: "Alert",
    type: "warning",
  },
}

export const Error = {
  args: {
    label: "Alert",
    type: "error",
  },
}

export const Comfortable = {
  args: {
    label: "Alert",
    density: "comfortable",
  },
}

export const Compact = {
  args: {
    label: "Alert",
    density: "compact",
  },
}

export const Prominent = {
  args: {
    label: "Alert",
    prominent: true,
  },
}

export const Width = {
  args: {
    label: "Alert",
    width: 300,
  },
}
