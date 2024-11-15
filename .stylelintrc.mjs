export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
  ignoreFiles: [
    ".stylelintrc.mjs",
    ".eslintrc.cjs",
    "eslint.config.cjs",
    ".prettierrc.mjs",
    "**/*.js",
    "**/*.ts",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.md",
    "**/*.png",
    "**/*.svg",
    "**/*.pdn",
    "**/*.json",
    "/node_modules",
    "/public"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "selector-id-pattern": /([A-Z][a-zA-Z]*)(-[A-Z]+[a-zA-Z]*){0,1}(_[a-z]+[a-zA-Z]*){0,2}/,
    "scss/at-function-pattern": /([a-z][a-zA-Z]*)(_[a-z]+[a-zA-Z]*){0,2}/,
    "scss/at-mixin-pattern": /([a-z][a-zA-Z]*)(_[a-z]+[a-zA-Z]*){0,2}/,
    "scss/dollar-variable-pattern": /([a-z][a-zA-Z]*)(_[a-z]+[a-zA-Z]*){0,2}/
  }
};
