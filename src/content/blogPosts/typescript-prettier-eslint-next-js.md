---
title: Start a clean Next.js project with TypeScript, Eslint and Prettier from scratch
excerpt: How to create a Next.js app with TypeScript from scratch, and how to configure eslint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.
date: '2020-11-01T16:00:00.000Z'
---


**TypeScript** is awesome. So is **Prettier**.

In this post, I will show you how to create a clean Next.js app with TypeScript from scratch, and how to configure eslint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.

Let's do it!
  
## Initiating the project

_Note: we will use [yarn](https://yarnpkg.com/) instead of npm throughout this post._

Please first create a new project folder, with the following package.json file:

```json
// package.json
{
  "name": "nextjs-typescript",
  "license": "MIT",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }  
}
```

You can also add this `.gitignore` file:

```
/node_modules
.DS_Store
.idea

# Next.js
/.next
/build
/out
.vercel
.env.*

# test
/coverage

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

Then, let's install next.js and its dependencies, alongside with TypeScript

```sh
# Install Next.js dependencies
yarn add next react react-dom

# Install TypeScript
yarn add --dev typescript @types/react @types/node
```

Now, let's create a simple **pages/index.tsx** file:

```jsx
// pages/index.tsx

const IndexPage: React.FC = () => (
  <main>
    <h1>Hello World!</h1>
  </main>
)
export default IndexPage

```

We can now start the server using **yarn dev**.

```sh
# Start the dev web server
yarn dev
```

Next.js will detect that we are now using TypeScript and will automatically create of us a **tsconfig.json** and a **next-env.d.ts** file.

I recommend you change the strict field in the tsconfig.json file from **false** to **true**. This will prevent you from not specifing types, and from using `any`. [More info here.](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)

```json
// tsconfig.json => Change "strict" to true 
{
  // ...
  "strict": true,
  // ...
}
```

## Add Eslint

Eslint will make sure we are following all good practices of TypeScript and React.

Let's install eslint:

```sh
# Add Eslint, and a TypeScript parser for Eslint, and a react eslint plugin
yarn add --dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

If we break it down:

  - `Eslint` is the main eslint package.
  - `@typescript-eslint/parser` will allow ESLint to parse TypeScript files.
  - `@typescript-eslint/eslint-plugin` will add TypeScript specific lint rules.
  - `eslint-plugin-react` will add React specific lint rules.
  - `eslint-plugin-react-hooks` will extend `eslint-plugin-react` to add React Hooks rules.
  - `eslint-plugin-jsx-a11y` will add accessibility related rules.



To enable and configure ESLint, we need to create a **.eslintrc.js** file.

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    'eslint:recommended', // Default rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
  ],
  rules: {
    'react/prop-types': 'off', // We will use TypeScript's types for component props instead.
    'react/react-in-jsx-scope': 'off', // No need to import React with Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with how Next.js's <Link />
    // I suggest this setting for requiring return types on functions only where usefull
    '@typescript-eslint/explicit-function-return-type': [
      'warn', {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }
    ],
  },
};

```

If you are using VSCode, I strongly suggest you install [the eslint plugin for vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), which will enable you to view eslint errors directly in your editor.

## Add Prettier

Prettier is a tool that handles code formating for us, saving us a lot of time.

Let's install Prettier:

```sh
# Add Prettier, and eslint plugin and config for prettier
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
```

You now need to configure Prettier by creating a **.prettierrc.js**

```JavaScript
// .prettierrc.js
module.exports = {
  // Change your rules accordingly to your coding style preferencies.
  // https://prettier.io/docs/en/options.html
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
}

```

&nbsp;

**You do NOT need to install any Prettier plugin to VSCode to make Prettier work**. A much better option is to include Prettier rules into eslint.

Let's edit our **.eslintrc.js** file to do so:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint', // Prettier plugin
    'plugin:prettier/recommended', // Prettier recommended rules 
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    // Includes .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}

```

&nbsp;

To unleash the true powers of eslint and prettier, we can configure vscode so that it autocorrects eslint errors.  
You should tell vscode not to formatOnSave, but instead fix eslint errors on save.

```js
// .vscode/settings.json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

If you open **pages/index.tsx**, you may see eslint errors. Try saving the file: you will see all those errors corrected automatically. **I can't tell you enough how much time this will save.**

See prettier in action:

![Prettier example](/images/blog/prettier-example.gif)


## Husky: Linting on commit

On way to make sure that the code will stay clean is to check for ESLint and TypeScript errors before each commit. One way of achieving this is to use Husky, a little program that will run scripts on a given Git command. 

First, let's add scripts in our package.json that will check our code:

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "check:type": "tsc --project tsconfig.json --pretty --noEmit",
    "check:lint": "eslint . --ext ts --ext tsx --fix"
  },
  // ...
}
```

  - **"check:type"** will look for TypeScript errors
  - **"check:lint"** will look for ESLint errors (if there are fixable errors, will fix them)

Next, we need to install Husky

```sh
yarn add --dev husky
```

Let's now use the `yarn lint` script to prevent us from commiting if there are TypeScript or ESLint errors, by adding this configuration in package.json:

```json
// package.json
{
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "yarn check:type && yarn check:lint"
    }
  }
  // ...
}
```

Now, if we commit our changes, our code will be checked. You can try to mess up with the code (for example, replace `React.FC` with `string` in pages/index.tsx) and try to commit. This should happen:

```sh
$ git commit -m "commit with error"
husky > pre-commit (node v12.18.3)
tsc --project tsconfig.json --pretty --noEmit && eslint . --ext ts --ext tsx --fix
pages/index.tsx:1:7 - error TS2322: Type '() => JSX.Element' is not assignable to type 'string'.

1 const IndexPage: string = () => {
        ~~~~~~~~~

Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
husky > pre-commit hook failed (add --no-verify to bypass)
```

_**Note:** If you want to skip the check (for example when you are just commiting changes to your README.md file), you can add a `--no-verify` flag to your commit command. For example: `git commit --no-verify -m "Update README.md"`_

### Good job reading this far!

You are now ready to write beautiful TypeScript code without having to worry about commiting wrong code! :)

## Bonus: Add unit testing with Jest

A good quality code usually implies unit testing. In this section, we will go a bit further in our bootstraping by adding the bases for Jest tests.

First, we need to insall testing-related packages:

```sh
yarn add --dev jest @types/jest babel-jest jest-watch-typeahead react-test-renderer @types/react-test-renderer
```

You then need to create the following config files:

```json
// .babelrc
{
  "presets": ["next/babel"]
}
```

```js
// jest.config.js
module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
}
```

Let's now add a test file for our `index.tsx` component. I like to add my test files next to my components, but you can also create a dedicated `tests` folder.

```tsx
// pages/index.test.tsx

import renderer from 'react-test-renderer'
import IndexPage from '.'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<IndexPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

Now you can run `npm run test` to start your jest tests!

## That's all folk!

You can give me feedback on this article on github: https://github.com/paulintrognon/paulintrognon.fr/issues

Happy coding!