import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "sanitize.css";

const GlobalStyle = createGlobalStyle`
  /* ${normalize} */

  @media (prefers-color-scheme: dark) {
      :root {
      --bg-color-theme: #1E1E22;
      --font-color-theme: #ccc;
    }
  }

    @media (prefers-color-scheme: light) {
      :root {
      --bg-color-theme: #F8F7F4;
      --font-color-theme: #31302E;
    }
  }

  html {
    background: var(--bg-color-theme);
    color: var(--font-color-theme);
    font-family: 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  
  * {
    margin: 0;
    padding: 0;

    &:focus {
      outline: 0;
    }
  }

  a,
  a:focus,
  a:visited,
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    &:disabled {
		  cursor: default;
	  }
  }

  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }

  `;

export default GlobalStyle;
