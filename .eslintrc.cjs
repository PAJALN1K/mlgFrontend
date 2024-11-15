module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true
  },
  plugins: [
    "@typescript-eslint",
    "boundaries",
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "@feature-sliced/eslint-config/rules/import-order",
    "@feature-sliced/eslint-config/rules/layers-slices"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "999.999.999"
    }
  },
  rules: {
    "arrow-body-style": "off",
    "no-alert": "error",
    "no-console": "error",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-use-before-define": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "radix": "off",

    "import/prefer-default-export": "off",

    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["to"] }],
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          every: ["id"]
        }
      }
    ],

    "prettier/prettier": ["error"],

    "react/forbid-prop-types": "off",
    "react/function-component-definition": [
      "error",
      { namedComponents: ["function-declaration", "arrow-function"] }
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/no-find-dom-node": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",

    "react-hooks/exhaustive-deps": "off",

    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
