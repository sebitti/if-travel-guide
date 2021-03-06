module.exports = {
  root: true,
  env: {
    node: true
    // browser: true
  },
  extends: [
    'plugin:vue/essential',
    // 'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
