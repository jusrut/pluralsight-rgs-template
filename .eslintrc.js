module.exports = {
    parser: '@babel/eslintparser',
    env: {
        browser: true,
        commonJS: true,
        es6: true,
        mode: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    paserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prop-types': ['off']
    },
};