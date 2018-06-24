// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: "babel-eslint",
    extends: ['eslint:recommended', "plugin:react/recommended"],
      //   "airbnb", // builds upon airbnb's linting rules
      //   "plugin:css-modules/recommended", // fixes css/scss
      //   "prettier", // prettier is an opinionated formatter. Only runs of files that changes
      //   "prettier/react", // follow react prittier rules flowtype
      //   "plugin:react/recommended"
    //   "plugin:react/all",
    //   "plugin:react",
    //   "plugin:eslint:all"
    // ],
    // plugins: ["css-modules", "prettier"],
    plugins: ["react"],
    // global variables
    globals: {
      __DEV__: true
    },
    // envoriments eslint is expected to run.
    env: {
      browser: true,
      node: true
    },
    settings: {
      // Allow absolute paths in imports, e.g. import Button from 'components/Button'
      // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
      "import/resolver": {
        node: {
          moduleDirectory: ["node_modules", "src"]
        }
      }
    },
    rules: {
      // Rules
      // -------------------------------
      // 0: off
      // 1: show warning (same as ['warn'])
      // 2: show error. (same as ['error'])

      // JavaScript Specific Rules
      // -------------------------------
      "comma-dangle": 2,
      indent: [
        "warn",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: {
            var: 2,
            let: 2,
            const: 3
          }
        }
      ],
      "no-trailing-spaces": [
        2,
        {
          skipBlankLines: true
        }
      ],
      "max-nested-callbacks": [2, 5],
      "no-eval": 2,
      "no-implied-eval": 2,
      "no-new-func": 2,
      "guard-for-in": 2,
      eqeqeq: 1,
      "no-else-return": 2,
      "no-redeclare": 2,
      "no-dupe-keys": 2,
      "no-shadow": 0,
      "no-delete-var": 2,
      "no-undef-init": 2,
      "no-shadow-restricted-names": 2,
      curly: ["error", "multi"],
      "handle-callback-err": 0,
      "no-lonely-if": 0,
      "keyword-spacing": 2,
      "constructor-super": 2,
      "no-this-before-super": 2,
      "no-dupe-class-members": 2,
      "no-const-assign": 2,
      "prefer-spread": 2,
      "no-useless-concat": 2,
      "no-var": 2,
      "object-shorthand": 2,
      "prefer-arrow-callback": 2,
      quotes: [
        2,
        "single",
        {
          avoidEscape: true
        }
      ],
      "new-cap": 1,
      "no-param-reassign": 1,
      "import/extensions": 1,
      "consistent-return": 1,
      "jsx-a11y/click-events-have-key-events": 1,
      "jsx-a11y/no-static-element-interactions": 1,
      // Forbid the use of extraneous packages
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
      "import/no-extraneous-dependencies": [
        "error",
        {
          packageDir: "."
        }
      ],
      "no-multiple-empty-lines": ["error", { "max": 0, "maxEOF": 0 }],
      // Recommend not to leave any console.log in your code
      // Use console.error, console.warn and console.info instead
      // https://eslint.org/docs/rules/no-console
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info"]
        }
      ],
      "no-else-return": ["error", { "allowElseIf": false }],
      "no-useless-return":2,
      "no-useless-return":2,
      // Prefer destructuring from arrays and objects
      // http://eslint.org/docs/rules/prefer-destructuring
      //   "prefer-destructuring": [
      //     "error",
      //     {
      //       VariableDeclarator: {
      //         array: false,
      //         object: true
      //       },
      //       AssignmentExpression: {
      //         array: false,
      //         object: false
      //       }
      //     },
      //     {
      //       enforceForRenamedProperties: false
      //     }
      //   ],
      // Ensure <a> tags are valid
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"]
        }
      ],
    //   "jsx-quotes": [2, "double"], // This rule was introduced in ESLint 1.4.0. have to have an upto date eslint // https://eslint.org/docs/rules/jsx-quotes
      // REACT Specific Rules
      // -------------------------------
      // TODO: due to the sheer number of issues this will just display warnings, and not errors for now. They should get stricter as we go.
      // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
      "react/prop-types": 1, // warn about missing proptypes
      "react/sort-comp": 1, // makes sure your life cycle methods are in order
      "import/no-named-as-default": 1,
      "react/no-did-mount-set-state": 1,
      "react/jsx-no-bind": 1,
      // Allow .js files to use JSX syntax
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".js", ".jsx"]
        }
      ],
      // Functional and class components are equivalent from React’s point of view
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
      "react/jsx-max-props-per-line": [2, { maximum: 8 }],
      "react/jsx-indent": 2,
      "react/jsx-handler-names": [
        2,
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on"
        }
      ],
      "react/jsx-no-target-blank": 2, // this is how you wann format each <Elements {props}/>
      "react/jsx-indent-props": [2, 2], // [ <enabled>, <numberOfSpaces></numberOfSpaces>  ]
      "react/forbid-component-props": 2,
      "react/boolean-prop-naming": 2,
      "react/boolean-prop-naming": [
        "error",
        {
          rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
          message:
            'It is better if your boolean ({{ propName }}) starts with "is" or "has" (e.g. isEnabled)'
        }
      ],
      "react/no-render-return-value": 2,
      "react/no-unused-prop-types": 2,
      "react/no-unknown-property": 2, // catches class v className
      "react/no-string-refs": 2,
      "react/no-will-update-set-state": 2,
      "react/no-unused-state": 2,
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true
        }
      ],
      "react/jsx-equals-spacing": [2, "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md#never
      "jsx-curly-spacing": [
        2,
        {
          when: "always",
          spacing: { objectLiterals: "never" },
          allowMultiline: false
        }
      ],

      // react/jsx-wrap-multilines BIG ONE HERE https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      "react/jsx-wrap-multilines": [
        2,
        {
          // "declaration": "parens",
          declaration: "parens-new-line",
          assignment: "parens",
          return: "parens",
          arrow: "parens",
          condition: "parens-new-line",
          logical: "parens",
          prop: "ignore"
        }
      ],
      "react/jsx-tag-spacing": [
        2,
        {
          //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          // "beforeClosing": "allow"
          beforeClosing: "never"
        }
      ],
      "react/jsx-sort-props": [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: true,
          ignoreCase: true,
          noSortAlphabetically: true,
          reservedFirst: true // React reserved props (children, dangerouslySetInnerHTML - only for DOM components, key, and ref)
          // "reservedFirst": true|["string"], // cusotm
        }
      ],
      "react/jsx-curly-brace-presence": [
        2,
        { props: "never", children: "never" }
      ],
      //   https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md

      "no-unused-vars": 2, //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    //   "react/jsx-pascal-case": [2, { allowAllCaps: false, ignore: `` }],
      "react/jsx-pascal-case": 2,
      "react/style-prop-object": 2,
      "react/sort-prop-types": [
        2,
        {
          callbacksLast: true,
          ignoreCase: true,
          requiredFirst: true,
          sortShapeProp: true
        }
      ],
      "react/jsx-no-undef": 2, // remove un used imports of JSX files
      "react/sort-comp": [
        2,
        {
          order: [
            "static-methods",
            "lifecycle",
            "getters",
            "setters",
            "/^on.+$/",
            "/^update.+$/",
            "/^set.+$/",
            "/^check.+$/",
            "/^handleResize.+$/",
            "runGetData",
            "everything-else",
            "render"
          ],
          groups: {
            "static-methods": [
              "propTypes",
              "storeShape",
              "loadData",
              "getPageSize",
              "dataUrl",
              "updateAnalyics",
              "insertPromoTile",
              "setSeoData"
            ],
            lifecycle: [
              "displayName",
              "propTypes",
              "contextTypes",
              "childContextTypes",
              "mixins",
              "statics",
              "defaultProps",
              "constructor",
              "getDefaultProps",
              "getInitialState",
              "state",
              "getChildContext",
              "componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "componentDidUpdate",
              "componentWillUnmount"
            ]
          }
        }
      ]

      // Flow Rules
      // -------------------------------
      //   "flowtype/boolean-style": [2, "boolean"],
      //   "flowtype/define-flow-type": 1,
      //   "flowtype/generic-spacing": [2, "never"],
      //   "flowtype/no-primitive-constructor-types": 2,
      //   "flowtype/no-weak-types": 2,
      //   "flowtype/object-type-delimiter": [2, "comma"],
      //   "flowtype/no-types-missing-file-annotation": 1,
      //   "flowtype/require-valid-file-annotation": 1,
      //   "flowtype/semi": [2, "always"],
      //   "flowtype/space-after-type-colon": [2, "always"],
      //   "flowtype/space-before-generic-bracket": [2, "never"],
      //   "flowtype/space-before-type-colon": [2, "never"],
      //   "flowtype/union-intersection-spacing": [2, "always"],
      //   "flowtype/use-flow-type": 1,
      //   "flowtype/valid-syntax": 1,
      // Custom Rules
      // -------------------------------
      // ESLint plugin for prettier formatting
      // https://github.com/prettier/eslint-plugin-prettier
      //  "prettier/prettier": "warn"
    }
  };
