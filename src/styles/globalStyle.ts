import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "sanitize.css";

const GlobalStyle = createGlobalStyle`
  /* ${normalize} */

  @media (prefers-color-scheme: dark) {
      :root {
      --bg-color-theme: #1E1E22;
      --font-color-theme: #ccc;
      --icon-color-theme: #6f6f6f;
      --hover-color-theme: #eee;
      --reversal-color-theme: #eee;
      
    }
  }

    @media (prefers-color-scheme: light) {
      :root {
      --bg-color-theme: #F8F7F4;
      --font-color-theme: #31302E;
      --icon-color-theme: #6f6f6f;
      --hover-color-theme: #9f9f9f;
      --reversal-color-theme: #f0f1f3;
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

  ul,li {
    list-style: none;
  }

  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }

  `;

export default GlobalStyle;
