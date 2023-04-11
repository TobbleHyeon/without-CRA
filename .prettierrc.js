module.exports = {
    printWidth: 80, // Number, 코드 한 줄 최대 길이 지정. 
    tabWidth: 2, // Number, 들여쓰기 너비 지정.
    useTabs: false, // Boolean, 탭 사용 유무. (스페이스바 대체),
    semi: true, // Boolean, 코드 끝에 세미콜론으로 처리 여부 설정.
    singleQuote: false, // Boolean, 큰따옴표("") 대신 작은따옴표('') 사용 여부 설정.
    quoteProps: "as-needed", // String, 객체 리터럴에서 속성 이름을 따옴표로 감쌀지 유무를 설정.
    // "as-needed" : 필요한 경우에만 따옴표 추가,
    // "consistent" : 하나 이상 따옴표가 필요할 시, 모든 속성에 따옴표를 부여,
    // "preserve" : 원본 코드에 명시적으로 사용한 따옴표를 그대로 유지.

    jsxSingleQuote: false, // Boolean, JSX 한정으로 큰따옴표("") 대신 작은따옴표('') 사용 여부 설정.
    trailingComma: "es5", // String, 객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부 설정.
    // "es5" : ES5에서 유효나 문법에 맞춰서 마지막 요소 뒤에 쉼표를 허용. 
    // "none": 후행쉼표를 사용하지 않음.
    // "all" : 후행쉼표 포함.

    bracketSpacing: true, // Boolean, 객체 리터럴 괄호 주위에 공백 추가 여부 설정.
    bracketSameLine: false, // Boolean, HTML, JSX, Vue, Angular 태그의 마지막 ">"를 다음 줄로 내릴지 여부 설정.
    jsxBracketSameLine: false, // Boolean, JSX 태그의 마지막 ">" 를 다음 줄로 내릴지 여부 설정. v2.4.0 이후는 지원하지 않음. bracketSameLine 으로 대체.
    arrowParens: "always", // String, 화살표 함수 인수 괄호를 항상 넣을지 여부 설정. 
    // "always" : 항상 괄호 부여.
    // "avoid" : 가능한 경우 괄호 생략.

    requirePragma: false, // Boolean, 주석으로 명시 된 곳만 prettier 포맷팅을 수행함.
    insertPragma: false, // Boolean, prettier 포맷팅 된 곳에는 상단에 주석으로 명시함.
    proseWrap: "preserve", // String, 마크다운에서 인쇄 너비로 산문을 랩핑 할지 여부 설정. 
    // "always" : 인쇄 너비 초과 시, 산문을 항상 랩핑함.
    // "never" : 인쇄 너비를 초과하더라도, 산문을 랩핑하지 않음.
    // "preserve" : 마크다운에서 정의한 내용 그대로 유지.

    htmlWhitespaceSensitivity: "css", //String, 마크업 언어에서 공백 문자를 처리하는 방식 지정.
    // "css" :
    // "strict" : 
    // "ignore" : 
};
