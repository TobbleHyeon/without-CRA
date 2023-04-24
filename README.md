# without-CRA

### react + typescript + sass를 베이스로 삼아, React 템플릿 구성

<br/>

### 1. 구성 버전

`webpack v5.77.0`, `babel v7.21.3`, `react v18.2.0` <br/>
**버전에 따라 deprecated 된 패키지가 있으므로 유의해야 함.**

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

| 구분                 | 모듈                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Webpack              | <code>webpack webpack-cli webpack-dev-server webpack-merge webpack-bundle-analyzer</code>                                    |
| Webpack-Loader       | <code>babel-loader sass-loader postcss-loader css-loader style-loader</code>                                                 |
| Webpack-Plugin       | <code>html-webpack-plugin mini-css-extract-plugin copy-webpack-plugin</code>                                                 |
| Webpack-Optimization | <code>css-minimizer-webpack-plugin @pmmmwh/react-refresh-webpack-plugin terser-webpack-plugin webpack-manifest-plugin</code> |
| Babel                | <code>@babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript</code>                           |
| etc                  | ggg                                                                                                                          |

- React + Typescript : <code>react react-dom typescript @types/react @types/react-dom</code><br/>
<ul>
    <li>
        CSS : <code>css-loader mini-css-extract-plugin sass sass-loader style-loader css-minimizer-webpack-plugin </code>
        <ul>
            <li> 
                <code>css-loader</code> : 자바스크립트 모듈로 CSS를 가져와 컴포넌트에 적용하는 용도. CSS 파일 모듈화.
            </li>
            <li>
                <code>mini-css-extract-plugin</code> : 웹팩에서 CSS 파일을 번들링 하기 위한 플러그인. 캐싱과 최적화 개선 목적.
            </li>
            <li>
                <code>style-loader</code> : 스타일시트를 자바스크립트 코드로 변환하여 동적으로 삽입.
            </li>
            <li>
               <code>css-minimizer-webpack-plugin</code> : CSS 파일을 압축하여 파일 크기를 줄이고, 성능을 개선함.
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        Babel : <code>@babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader</code>
        <ul>
            <li> 
                <code>@babel/preset-react</code> : 애플리케이션 내 JSX 문법 사용을 위한 프리셋.
            </li>
            <li>
               <code>@babel/preset-env</code> : 브라우저의 버전에 따라 자동으로 코드 변환을 처리.
            </li>
            <li>
                <code>@babel/preset-typescript</code> : TypeScript 코드를 JavaScript 코드로 변환함.
            </li>
            <li>
                <code>babel-loader</code> : 웹팩에서 Babel을 사용할 수 있게 해주는 로더. 웹팩에서 자바스크립트 파일을 번들링하기 전에, babel-loader를 사용해서 ES6+ 문법을 ES5 문법으로 변환함.
            </li>
            <li>
                <code>react-refresh/babel</code> : React 컴포넌트를 수정할 때마다 자동으로 컴포넌트를 리로드하고, 변경사항을 적용함.
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        Webpack : <code>clean-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge @svgr/webpack @pmmmwh/react-refresh-webpack-plugin webpack-manifest-plugin copy-webpack-plugin</code>
        <ul>
            <li> 
                <code>clean-webpack-plugin</code> : 웹팩 빌드 전 이전 빌드에서 생성된 파일을 제거해 줌.
            </li>
            <li>
                <code>html-webpack-plugin</code> : 웹팩에서 HTML 파일을 생성하고, 빌드된 자바스크립트 파일을 자동으로 로드하도록 설정.
            </li>
            <li>
                <code>terser-webpack-plugin</code> : 자바스크립트 코드 압축, 난독화 등을 수행하여 파일 크기를 줄이고, 성능을 개선함.
            </li>
            <li>
                <code>webpack-bundle-analyzer</code> : 웹팩 빌드 결과물의 크기 분석. 이를 통해 불필요한 모듈이나 파일을 식별하고, 더 나은 최적화 방안을 제시.
            </li>
            <li>
                <code>webpack-merge</code> : 웹팩 설정 파일을 합침. 개발환경, 배포환경을 웹팩을 구분하기 위함.
            </li>
            <li>
                <code>@svgr/webpack</code> : SVG 파일을 로드하고 React 컴포넌트로 변환.
            </li>
            <li>
                <code>@pmmmwh/react-refresh-webpack-plugin</code> : Hot Module Replacement(HMR) 기능을 이용 해, React 라이브 리로드를 가능하게 해줌.
            </li>
            <li>
                <code>webpack-manifest-plugin</code> : 번들링시 생성되는 코드에 대한 정보를 json파일로 저장하여 관리.
            </li>
            <li>
                <code>copy-webpack-plugin</code> : 번들링을 요하지 않는 assets의 원본 상태 그대로 build 디렉토리에 저장.
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        etc : <code>core-js</code>
        <ul>
            <li> 
                <code>core-js</code> : ECMAScript의 새로운 기능을 지원하는 폴리필 라이브러리.
            </li>
        </ul>
    </li>
</ul>

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
