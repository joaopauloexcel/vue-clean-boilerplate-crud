import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.vue', '**/*.ts'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    {
        ignores: ['dist', 'node_modules']
    }
]
