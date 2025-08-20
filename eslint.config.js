
let commonConfig = require('@totalpave/eslint-plugin').default;

module.exports = [
    ...commonConfig,
    {
        languageOptions: {
            parserOptions: {
                "project": "./spec/tsconfig.json",
                "tsconfigRootDir": __dirname
            }
        }
    }
]
