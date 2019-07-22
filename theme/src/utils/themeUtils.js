import { css } from 'styled-components'

import { media } from './styles'
import theme from '../theme'

export const themeUtils = {
  ...theme,
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
      box-shadow: inset 0 -2rem ${theme.black};
      color: ${theme.white};
    }
  `,
  globalPadding: (padding = 6) => css`
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
