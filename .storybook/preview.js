// .storybook/preview.js
import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

/* snipped for brevity */

export const decorators = [withVuetifyTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
export const tags = ['autodocs'];