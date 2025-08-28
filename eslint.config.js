const {defineConfig} = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');

module.exports = defineConfig([
    expoConfig,
    {
        ignores: [
            'dist/*',
            'node_modules/*',
            'coverage/*',
            '.expo/*',
        ],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json', // якщо буде повільно → можна замінити на ecmaVersion/sourceType
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier,
        },
        rules: {
            // TypeScript
            '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],

            // Загальні
            'no-console': 'warn',

            // Імпорти
            'import/order': ['error', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                alphabetize: {order: 'asc', caseInsensitive: true},
            }],

            // Prettier
            'prettier/prettier': ['warn', {
                endOfLine: 'auto',
            }],
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
                alias: {
                    map: [
                        ['@', './src'],
                        ['@assets', './assets'],
                        ['@components', './src/components'],
                    ],
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg'],
                },
            },
        },
    },
]);