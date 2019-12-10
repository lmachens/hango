import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 10;
          background: ${theme.colors.background};
          font-family: "Lilita One", cursive;
        }
      `}
    />
  );
}

export default GlobalStyles;
