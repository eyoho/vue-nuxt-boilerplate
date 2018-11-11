// https://eslint.org/docs/user-guide/configuring

const isProduction = (process.env.NODE_ENV === 'production') ? 'error' : 'off'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': isProduction,
    'no-debugger': isProduction,
    'semi': [2, 'never'],
    // 'v-for'와 'v-if' 함께 사용 가능
    'vue/no-confusing-v-for-v-if': 'off',
    // 속성 입력시 줄바꿈 규칙 없음
    'vue/max-attributes-per-line': 'off',
    // 속성 순서
    'vue/attributes-order': [2, {
      order: [
        // 기본 HTML 속성이 맨뒤로 정렬
        //'GLOBAL', // ex: 'id'
        //'DEFINITION', // ex: 'is'
        //'BINDING', // ex: 'v-bind'
        //'TWO_WAY_BINDING', // ex: 'v-model',
        //'CONTENT', // ex: 'v-text', 'v-html'
        //'RENDER_MODIFIERS', // ex: 'v-once', 'v-pre'
        //'CONDITIONALS', // ex: 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        //'LIST_RENDERING', // ex: 'v-for item in items'
        //'UNIQUE', // ex: 'ref', 'key', 'slot',
        //'OTHER_ATTR', // ex: 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"',
        //'OTHER_DIRECTIVES', // ex: 'v-custom-directive'
        //'EVENTS', // ex: '@click="functionCall"', 'v-on="event"'
      ]
    }]
  }
}
