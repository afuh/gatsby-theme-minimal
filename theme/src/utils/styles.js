import { css, createGlobalStyle } from 'styled-components'

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480
}

export const media = {
  mobile: inner => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: inner => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,

  medium: inner => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: inner => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: inner => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `
}

const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()


export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/12)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/10)}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size * 1.2}rem;
  `)}
`

const typography = css`
  h1 { ${fontSize(3.2)}; }
  h2 { ${fontSize(2.4)}; }
  h3 { ${fontSize(1.9)}; }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
`

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    ${({ theme }) => css`
      color: ${theme.black};
      background: ${theme.white};

      *::selection {
        color: ${theme.black};
        background: ${theme.accent};
      }
    `};

    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.02rem;
    font-variant-ligatures: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
    font-family: ${defaultFont};
  }

  ${typography}
`
