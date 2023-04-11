# without-CRA

### typescript + sass 기반 초기환경 셋팅

1. <pre>mkdir kill-cra-react && cd $_</pre>
2. <pre>npm init -y</pre>
3. webpack & babel을 구성하기 위한 Install 목록

- React + Typescript : <code>react react-dom typescript @types/react @types/react-dom</code><br/>
<ul>
    <li>
        CSS : <code>css-loader mini-css-extract-plugin sass sass-loader style-loader</code>
        <ul>
            <li> 
                <code>css-loader</code> : 자바스크립트 모듈로 CSS를 가져와 컴포넌트에 적용하는 용도. CSS 파일 모듈화.
            </li>
            <li>
                <code>mini-css-extract-plugin</code> : 웹팩에서 CSS 파일을 번들링하기 위한 플러그인. 캐싱과 최적화 개선 목적.
            </li>
            <li>
                <code>style-loader</code> : 스타일 시트를 자바스크립트 코드로 변환하여 동적으로 삽입.
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        Babel : <code>@babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader</code>
        <ul>
            <li> 
                <code>@babel/preset-react</code> : 애플리케이션 내 JSX 문법 사용을 위한 프리셋
            </li>
            <li>
               <code>@babel/preset-env</code> : 브라우저의 버전에 따라 자동으로 코드 변환을 처리
            </li>
            <li>
                <code>@babel/preset-typescript</code> : TypeScript 코드를 JavaScript 코드로 변환
            </li>
            <li>
                <code>babel-loader</code> : 웹팩에서 Babel을 사용할 수 있게 해주는 로더. 웹팩에서 자바스크립트 파일을 번들링하기 전에, babel-loader를 사용해서 ES6+ 문법을 ES5 문법으로 변환함.
            </li>
        </ul>
    </li>
</ul>
<ul>
    <li>
        Webpack : <code>clean-webpack-plugin css-minimizer-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge</code>
        <ul>
            <li> 
                <code>clean-webpack-plugin</code> : 웹팩 빌드 전 이전 빌드에서 생성된 파일을 제거해 줌.
            </li>
            <li>
               <code>css-minimizer-webpack-plugin</code> : CSS 파일을 압축하여 파일 크기를 줄이고, 성능을 개선함.
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

- .babelrc 내에 코드 추가,
각 구성에 대한 설명은 .babelrc 내 주석으로 기재함.
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
}
</pre>
    </li>
</ul>

5. <pre>touch webpack.common.js webpack.dev.js webpack.prod.js</pre>

- 개발환경과 배포환경을 구분지어 webpack을 설정함.
<ul>
    <li>
        webpack.config.js 내에 코드 추가 ↓ <br/>
        mode는 환경에 초점을 두고 선택을 한다. "development || production"<br/>
        entry는 Webpack4부터 생략이 가능함. default : "./src/index.js"<br/><br/>
    </li>
    <li>
        entrys : 번들링 프로세스가 시작되는 지점.<br/>
        output : 번들링 프로세스 종료 후, 번들링된 파일을 저장할 디렉토리와 이름 지정.<br/>
        module : 번들링 간 사용될 규칙 설정.<br/>
        plugins : 웹팩 번들링 간 적용할 플러그인 설정.<br/> 
    </li>
</ul>
