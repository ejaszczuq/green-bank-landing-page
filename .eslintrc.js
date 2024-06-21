module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  env: {
    browser: true,
    jest: true,
    es2021: true
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "react-hooks", "@typescript-eslint", "unused-imports"],
  rules: {
    // curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    "@typescript-eslint/no-explicit-any": "off",
    "no-var": "error",
    "no-console": "warn",
    "no-useless-catch": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    "jsx-quotes": ["error", "prefer-double"],
    "react/boolean-prop-naming": "error", // Enforces consistent naming for boolean props
    "react/no-adjacent-inline-elements": "error", // Prevent adjacent inline elements not separated by whitespace.
    "react/no-danger-with-children": "error", // Report when a DOM element is using both children and dangerouslySetInnerHTML
    "react/no-did-update-set-state": "error", // Prevent usage of setState in componentDidUpdate
    "react/no-direct-mutation-state": "error", // Prevent direct mutation of this.state
    "react/no-find-dom-node": "error", // Prevent usage of findDOMNode
    "react/no-is-mounted": "error", // Prevent usage of isMounted
    "react/no-redundant-should-component-update": "error", // Flag shouldComponentUpdate when extending PureComponent
    "react/no-render-return-value": "error", // Prevent usage of the return value of React.render
    "react/no-typos": "error", // Prevent common typos
    "react/no-unescaped-entities": "error", // Detect unescaped HTML entities, which might represent malformed tags
    "react/no-unknown-property": "error", // Prevent usage of unknown DOM property (fixable)
    "react/no-unsafe": "error", // Prevent usage of unsafe lifecycle methods
    "react/no-unused-prop-types": "error", // Prevent definitions of unused prop types
    "react/no-unused-state": "error", // Prevent definition of unused state fields
    "react/no-will-update-set-state": "error", // Prevent usage of setState in componentWillUpdate
    "react/prefer-es6-class": "error", // Enforce ES5 or ES6 class for React Components
    "react/self-closing-comp": "error", // Prevent extra closing tags for components without children (fixable)
    "react/static-property-placement": "error", // Defines where React component static properties should be positioned.
    "react/void-dom-elements-no-children": "error", // Prevent passing of children to void DOM elements (e.g. <br />).
    "react/jsx-boolean-value": "error", // Enforce boolean attributes notation in JSX (fixable)
    "react/jsx-child-element-spacing": "error", // Ensures inline tags are not rendered without spaces between them
    "react/jsx-curly-brace-presence": "error", // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes (fixable)
    "react/jsx-curly-spacing": "error", // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    "react/jsx-equals-spacing": "error", // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
    "react/jsx-first-prop-new-line": "error", // Ensure proper position of the first property in JSX (fixable)
    "react/jsx-fragments": "error", // Enforce shorthand or standard form for React fragments (fixable)
    "react/jsx-key": "error", // Report missing key props in iterators/collection literals
    // "react/jsx-max-depth": ["error", { max: 10 }], // Validate JSX maximum depth
    "react/jsx-no-comment-textnodes": "error", // Comments inside children section of tag should be placed inside braces
    "react/jsx-no-duplicate-props": "error", // Enforce no duplicate props
    "react/jsx-no-script-url": "error", // Forbid javascript":"error",// URLs
    "react/jsx-no-target-blank": "error", // Forbid target="_blank" attribute without rel="noreferrer"
    "react/jsx-no-undef": "error", // Disallow undeclared variables in JSX
    "react/jsx-pascal-case": "error", // Enforce PascalCase for user-defined JSX components
    "react/jsx-props-no-multi-spaces": "error", // Disallow multiple spaces between inline JSX props (fixable)
    "react/jsx-tag-spacing": "error", // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    "react/jsx-uses-react": "error", // Prevent React to be marked as unused
    "react/jsx-uses-vars": "error", // Prevent variables used in JSX to be marked as unused
    "react/jsx-wrap-multilines": "error", // Prevent missing parentheses around multilines JSX (fixable)
    "unused-imports/no-unused-imports": "error", //Disallow unused imports
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array"
      }
    ]
  }
};
