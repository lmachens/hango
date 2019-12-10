import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import dark from "../src/themes/dark";
import light from "../src/themes/light";

addDecorator(storyFn => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
