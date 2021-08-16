import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      printWidth: 100,
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
      // root:'#root > *'
    },
  },
};

addDecorator(withA11y);
