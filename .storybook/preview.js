import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withKnobs);
