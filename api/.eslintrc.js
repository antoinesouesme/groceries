module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript/base"
    ],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "ignorePatterns": [
        ".eslintrc.js"
    ],
    "rules": {

        //
        // ─── @TYPESCRIPT-ESLINT ──────────────────────────────────────────
        //

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-loop-func": "off",
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "memberLike",
                "modifiers": [
                    "private"
                ],
                "format": [
                    "camelCase"
                ],
                "leadingUnderscore": "require"
            },
        ],
        "@typescript-eslint/member-ordering": [
            "error"
        ],
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                "allowDestructuring": true,
                "allowedNames": [
                    "that"
                ]
            }
        ],

        //
        // ─── ESLINT-PLUGIN-IMPORT ────────────────────────────────────────
        //

        "import/order": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-cycle": "off",

        //
        // ─── ESLINT ──────────────────────────────────────────────────────
        //

        "linebreak-style": "off",
        "camelcase": "off",
        "no-unused-vars": "off",
        "no-underscore-dangle": "off",
        "require-await": "error",
        "no-shadow": "off",
        "object-curly-newline": "off",
        "max-len": "off",
        "no-else-return": "off",
        "class-methods-use-this": "off",
        "dot-notation": "off",
        "no-return-await": "off",
        "require-await": "off",
        "no-case-declarations": "off",
        "no-restricted-globals": "off",
        "no-param-reassign": "off",
        "no-restricted-syntax": "off",
        "array-callback-return": "off",
        "no-prototype-builtins": "off",
        "consistent-return": "off",
        "max-classes-per-file": "off",
        "no-console": [
            "error",
            {
                "allow": [
                    "error",
                    "info",
                    "warn",
                ]
            }
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline"
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
    },
}
