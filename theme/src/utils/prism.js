import { css } from "styled-components"

const schema = {
  gray: "#9F9FA3",
  cyan: "#00BCD4",
  purple: "#c678dd",
  blue: "#61afef",
  yellow: "#e5c07b",
  brown: "#d19a66",
  green: "#98c379",
  inline: {
    back: "#eaeced",
    color: "#323232"
  }
}

export const prismCSS = css`
  code {
    font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
    line-height: 1.4rem
  }

  code[class*="language-"],
  pre[class*="language-"] {
  	color: ${({ theme }) => theme.secondary};
  	background: none;
  	text-align: left;
  	white-space: pre;
  	word-spacing: normal;
  	word-break: normal;
  	word-wrap: normal;
  	line-height: 1.5;
  	tab-size: 4;
  	hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    background: ${({ theme }) => theme.primary};
  	padding: 1em;
  	margin: .5em 0;
  	overflow: auto;
  	border-radius: 2px;
  }

  /* Inline code */
  p > code[class*="language-"],
  li > code[class*="language-"] {
    background: ${schema.inline.back};
    color: ${schema.inline.color};
    padding: 0.2em;
    border-radius: 0;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
  	color: slategray;
  }

  .namespace {
  	opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${schema.yellow};
  }

  .token.boolean,
  .token.number {
  	color: ${schema.cyan};
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
  	color: ${schema.green};
  }

  .token.attr-name {
    color: ${schema.brown};
  }

  .token.operator,
  .token.punctuation,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
  	color: ${schema.gray};
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
  	color: ${schema.blue};
  }

  .token.keyword {
  	color: ${schema.purple};
  }

  .token.regex,
  .token.important {
  	color: #fd971f;
  }

  .token.important,
  .token.bold {
  	font-weight: bold;
  }
  .token.italic {
  	font-style: italic;
  }

  .token.entity {
  	cursor: help;
  }
`
