# without-CRA

### react + typescript + sass를 베이스로 삼아, React 템플릿 구성

### 1. 구성 버전

`webpack v5.77.0`, `babel v7.21.3`, `react v18.2.0` <br/>
**버전에 따라 추가 install 없이 기본 내장된 패키지가 있으므로 유의해야 함.**

### 2. webpack 구성

개발/배포환경에 맞는 모듈, output 처리가 될 수 있도록 `webpack-merge` 를 사용해서 파일을 분할.<br/>

```bash
without CRA
├── config
│   ├── webpack.common.js # dev, prod 모두 common을 머지하고 있음.
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist
├── node_modules
├── pulbic
└── src

```

### 3. webpack & babel을 구성하기 위한 Install 목록

| 구분                 | 모듈                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Webpack              | <code>webpack webpack-cli webpack-dev-server webpack-merge webpack-bundle-analyzer</code>                                                  |
| Webpack-Loader       | <code>babel-loader sass-loader postcss-loader css-loader style-loader @svgr/webpack</code>                                                 |
| Webpack-Plugin       | <code>html-webpack-plugin mini-css-extract-plugin copy-webpack-plugin</code>                                                               |
| Webpack-Optimization | <code>css-minimizer-webpack-plugin react-refresh @pmmmwh/react-refresh-webpack-plugin terser-webpack-plugin webpack-manifest-plugin</code> |
| Babel                | <code>@babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript</code>                                         |
| React,Ts Environment | <code>react react-dom typescript @types/react @types/react-dom</code>                                                                      |
| CSS                  | <code>sass</code>                                                                                                                          |
| etc                  | <code>core-js</code>                                                                                                                       |

- <code>webpack-dev-server</code>: 개발용 서버를 제공하고, 코드를 수정할 때마다 브라우저를 자동으로 새로고침함.
- <code>webpack-merge</code> : 다수의 웹팩 설정 파일을 합침.
- <code>webpack-bundle-analyzer</code> : 번들 크기와 구성을 시각적으로 보여줌.

- <code>babel-loader</code> : 웹팩에서 Babel을 사용할 수 있게 해주는 로더. 자바스크립트 코드 컴파일.
- <code>sass-loader</code> : Sass(SCSS) 파일을 CSS로 변환하여 처리.
- <code>postcss-loader</code> : PostCSS를 사용하는 로더. Autoprefixer와 같은 플러그인을 사용하여 CSS를 최적화.
- <code>css-loader</code> : CSS 파일을 처리하는 로더. 웹팩에서 CSS 파일을 가져와서 번들링.
- <code>style-loader</code> : 웹팩으로 처리된 CSS를 HTML 내 head태그에 style태그로 동적 삽입.
- <code>@svgr/webpack</code> : SVG 파일을 로드하고 React 컴포넌트로 변환.

- <code>html-webpack-plugin</code> : 웹팩에서 HTML 파일을 생성하고, 빌드된 자바스크립트, CSS 파일을 자동으로 로드하도록 설정.
- <code>mini-css-extract-plugin</code> : JavaScript에서 생성된 CSS를 별도의 파일로 분리하여 번들링함.
- <code>copy-webpack-plugin</code> : 번들링을 요하지 않는 assets의 원본 상태 그대로 build 디렉토리에 저장.

- <code>css-minimizer-webpack-plugin</code> : CSS 파일을 압축하여 파일 크기를 줄이는 플러그인.
- <code>@pmmmwh/react-refresh-webpack-plugin</code> : Hot Module Replacement(HMR) 기능을 이용 해, React 라이브 리로드를 가능하게 해줌.
- <code>terser-webpack-plugin</code> : 자바스크립트 코드 압축, 난독화 등을 수행하여 파일 크기를 줄이고, 성능을 개선함.
- <code>webpack-manifest-plugin</code> : 번들링시 생성되는 코드에 대한 정보를 manifest.json파일로 저장하여 관리.

- <code>@babel/preset-react</code> : 애플리케이션 내 JSX 문법 사용을 위한 바벨 프리셋.
- <code>@babel/preset-env</code> : 최신 버전의 자바스크립트 문법을 사용할 수 있게 해주는 바벨 프리셋.
- <code>@babel/preset-typescript</code> : TypeScript 코드를 JavaScript 코드로 변환해주는 바벨 프리셋.

- <code>core-js</code> : ECMAScript(ES6+)의 새로운 기능을 지원하는 폴리필 라이브러리.

4. <pre>touch .babelrc</pre>

<ul>
    <li>
        .babelrc 내에 코드 추가, 각 구성에 대한 설명은 .babelrc 내 주석으로 기재함.
        <ul>
            <li>
                <pre>
{
    "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    "@babel/preset-typescript"
  ]
}</pre>
            </li>
        </ul>
    </li>
</ul>

<strong>추가내용 기술 예정. 라이브테스트 전, env 관리에 대한 패키지 준비중</strong>
