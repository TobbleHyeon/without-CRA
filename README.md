# without-CRA

<strong>못쥐돠 욘쥔와~ 아몰랑 그냥해~ </strong>

<ol>
    <li><pre>mkdir kill-cra-react && cd $_</pre></li>
    <li><pre>npm init -y</pre></li>
    <li><pre>npm install ~~~ / ~~~ -D</pre> 
        <ul>
            <li>초기 install 목록 ( typescript + sass 기반으로 운영될 리액트 기준)</li>
            <li>React + Typescript : <code>react react-dom typescript @types/react @types/react-dom</code></li>
            <li>CSS : <code>css-loader mini-css-extract-plugin sass sass-loader style-loader</code></li>
            <li>Babel : <code>@babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader </code></li>
            <li>Webpack : <code>clean-webpack-plugin css-minimizer-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge</code></li>
            <li>etc : <code>core-js</code></li>
        </ul>
    </li>
    <br/>
    <li>
        <pre>touch .babelrc</pre>
        <ul>
            <li>
            .babelrc 내에 코드 추가 ↓<br/><br/>
                <code>{ "presets": ["@babel/preset-env", "@babel/preset-react"] }</code>
            </li>
        </ul>
    </li>
    <br/>
    <li>
        <pre>touch webpack.config.js</pre>
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
    </li>
</ol>
