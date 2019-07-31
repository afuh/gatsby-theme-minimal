import { css } from "styled-components"

import { media } from "./styles"
import userEditable from "../theme"

export const themeUtils = {
  // user editable
  primary: "#212129",
  secondary: "#FEFEFE",
  accent: "#78ff78",
  gray: "#9F9FA3",
  softGray: "#9F9FA31a",
  postWidth: 600,
  ...userEditable,

  // theme utils
  padding: 6,
  headerHeight: 220,
  globalMargin: (val = 40) => css`
    margin-top: ${val}px;

    ${media.phone(css`
      margin: 40px 0;
    `)}
  `,
  anchorHover: ({ theme }) => css`
    box-shadow: inset 0 -0.2rem ${theme.gray}80;
    transition: box-shadow .1s ease;

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0 -2rem ${theme.primary};
      color: ${theme.secondary};
    }
  `,
  globalPadding: padding => css`
    padding: 0 ${padding}% 0 ${padding*2}%;

    ${media.medium(css`
      padding: 0 ${padding*2}% 0 ${padding*4}%;
    `)}

    ${media.xlarge(css`
      padding: 0 ${padding*3}% 0 ${padding*6}%;
    `)}

    ${media.phone(css`
      padding: 0 ${padding}%;
    `)}
  `
}
