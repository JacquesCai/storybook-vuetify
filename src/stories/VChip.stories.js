
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
