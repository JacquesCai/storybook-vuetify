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
