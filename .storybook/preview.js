import { themes } from "@storybook/theming";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { theme } from "../src/defaultTheme";

addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  darkMode: {
    current: "lights-out",
    darkClass: "lights-out",
  },
  docs: {
    theme: themes.dark,
  },
};
