"use strict";

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "on",
    "react/default-props-match-prop-types": "on",
    "react/no-array-index-key": "on",
    "jsx-a11y/anchor-is-valid": "off",
    // Deprecated in favor of jsx-a11y/label-has-associated-control
    "jsx-a11y/label-has-for": "off",
    "import/no-unresolved": [
      "error"
    ],
    "import/no-extraneous-dependencies": context => [
      "error",
      {
        devDependencies: true,
        packageDir: [context.getFilename(), __dirname]
      }
    ]
  },
  parser: "babel-eslint"
};
