export default {
  printWidth: 100,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  tabWidth: 2,
  semi: true,
  quoteProps: "consistent",
  endOfLine: "auto",
  overrides: [
    {
      files: ["*.css", "*.scss"],
      options: {
        tabWidth: 4,
        semi: false
      }
    }
  ]
};
