// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许tab缩进
    'no-tabs': 'off',
    // 关闭===检测
    'eqeqeq': 'off',
    // 允许多行空行
    'no-multiple-empty-lines': 'off',
    // 允许多余空格
    'no-trailing-spaces': 'off',
    // end of file last line
    'eol-last': 'off',
	  // promise reject不需要error对象
	  'prefer-promise-reject-errors': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": "off",
    "semi": "off",
    "quotes": "off",
    "key-spacing": "off",
    "spaced-comment": "off",
    "space-before-blocks":"off",
    "space-before-function-paren":"off",
    "keyword-spacing":"off",
    "comma-spacing":"off",
    "no-array-constructor":"off",
    "no-mixed-spaces-and-tabs":"off",
    "comma-dangle":"off",
    "space-infix-ops":"off",
    "semi-spacing":"off",
    "no-redeclare":"off"
  }
}
