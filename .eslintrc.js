module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
      "no-use-before-define": ["error", { "functions": true, "classes": true }]

      

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
