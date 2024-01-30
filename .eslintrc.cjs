module.exports = {
  root: true, // ESLint 구성의 루트로 설정합니다.
  env: {
    browser: true, // 브라우저 전역 변수를 사용 가능하게 합니다.
    es2020: true, // ES2020 전역 변수와 문법을 사용 가능하게 합니다.
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // TypeScript 코드를 분석하기 위한 파서입니다.
  plugins: ['react','react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 여기부터 추가된 규칙들입니다.
    "no-var": "warn", // `var` 키워드 사용을 경고합니다.
    "no-multiple-empty-lines": "warn", // 여러 개의 연속된 빈 줄을 경고합니다.
    "no-console": ["warn", { "allow": ["warn", "error"] }], // `console.log` 사용을 경고하지만, `warn`과 `error`는 허용합니다.
    "eqeqeq": "error", // `==`와 `!=` 대신 `===`와 `!==` 사용을 강제합니다.
    "dot-notation": "warn", // 객체 프로퍼티 접근 시 점 표기법 사용을 권장합니다.
    "no-unused-vars": "warn", // 사용하지 않는 변수가 있으면 경고합니다.
    "react/destructuring-assignment": "warn", // React 컴포넌트에서 props, state 등을 사용할 때 구조 분해 할당을 사용하도록 권장합니다.
    "react/jsx-pascal-case": "warn", // JSX에서 컴포넌트 이름은 PascalCase를 사용하도록 권장합니다.
    "react/no-direct-mutation-state": "warn", // React state를 직접 수정하는 것을 금지합니다.
    "react/jsx-no-useless-fragment": "warn", // 불필요한 Fragment 사용을 경고합니다.
    "react/no-unused-state": "warn", // 사용되지 않는 state를 선언한 경우 경고합니다.
    "react/jsx-key": "error", // 배열의 각 요소들을 렌더링 할 때 `key` 속성을 강제합니다.
    "react/self-closing-comp": "warn", // 자식이 없는 컴포넌트는 self-closing 태그를 사용하도록 권장합니다.
    "react/jsx-curly-brace-presence": "warn", // JSX에서 JavaScript 표현식을 중괄호 없이 쓸 수 있을 때 중괄호 사용을 경고합니다.
  },
}
