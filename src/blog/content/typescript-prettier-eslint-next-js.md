---
title: Start a clean Next.js project with TypeScript, ESLint and Prettier from scratch
excerpt: How to create a Next.js app with TypeScript from scratch, and how to configure ESLint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.
date: '2020-11-06T23:21:41.123Z'
---


**TypeScript** is awesome. So is **Prettier**.

In this post, I will show you how to create a clean Next.js app with TypeScript from scratch, and how to configure ESLint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.

Let's do it!

_Note: you can have a look at the end result here: [github.com/paulintrognon/next-typescript](https://github.com/paulintrognon/next-typescript)_

_Note: we will use [yarn](https://yarnpkg.com/) instead of npm throughout this post._
  
## Initiating the project

We will start from scratch with an empty project, this way you will have a perfect knowledge of how your project is built, which means better control.

Please first create a new project folder, with the following package.json file:

```json
// package.json
{
  "name": "your-project-name",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }  
}
```

Run `git init` to initiate git, and add a [.gitignore](https://github.com/paulintrognon/next-typescript/blob/master/.gitignore) file.

Then, let's install next.js and its dependencies, alongside with TypeScript.

```sh
# Install Next.js dependencies
yarn add next react react-dom

# Install TypeScript
yarn add typescript @types/react @types/node
```

Now, let's create a **pages/index.tsx** file. I am using getServerSideProps to fetch next SpaceX launch, which I am displaying on the homepage. [More info on getServerSideProps here](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

```jsx
// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: number
    rocket: string
  }
}
const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp)
  return (
    <main>
      <h1>Next SpaceX Launch: {launch.mission}</h1>
      <p>
        {launch.rocket} will take off from {launch.site} on {date.toDateString()}
      </p>
    </main>
  )
}
export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/next')
  const nextLaunch = await response.json()
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  }
}
```

We can now start the server using **yarn dev**.

```sh
# Start the dev web server
yarn dev
```

Next.js will detect that we are now using TypeScript and will automatically create for us a **tsconfig.json** and a **next-env.d.ts** file.

If you are confortable with TypeScript (or if you want the real TypeScript experience, which I highly recommend), change the `strict` field in the `tsconfig.json` file from **false** to **true**. This will prevent you from not specifying types, and from using `any`. [More info here.](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)

```json
// tsconfig.json => Change "strict" to true 
{
  // ...
  "strict": true,
  // ...
}
```

## Add ESLint

ESLint will make sure we are following all good practices of TypeScript and React.

Let's install ESLint:

```sh
# Add ESLint, and a TypeScript parser for Eslint, and a react ESLint plugin
yarn add --dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

If we break it down:

  - `eslint` is the main ESLint package.
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
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
```

If you are using VSCode, I strongly recommend you install [the ESLint plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), which will enable you to view ESLint errors directly in your editor.

## Add Prettier

Prettier is a tool that handles code formatting for us, saving us a lot of time.

Let's install Prettier:

```sh
# Add Prettier, and the ESLint plugin and config for prettier
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
```

We now need to configure Prettier by creating a **.prettierrc.js**

```JavaScript
// .prettierrc.js
module.exports = {
  // Change your rules accordingly to your coding style preferences.
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

**You do NOT need to install any Prettier plugin to VSCode to make Prettier work**. A much better option is to include Prettier rules into ESLint.

Let's edit our **.eslintrc.js** file to include Prettier:

```javascript
// .eslintrc.js
module.exports = {
  // ...
  overrides: [
    {
      // ...
      extends: [
        // ...
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules 
      ],
      rules: {
        // ...
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
  ],
}

```

_**Note**: We could have written the prettier configuration directly in the .eslintrc.js file, but by using a separate prettierrc file, we stay compatible with editors configured with the Prettier plugin._

&nbsp;

To unleash the true powers of ESLint and Prettier, we can configure VS Code so that it auto-corrects ESLint errors.  
You should tell VS Code not to formatOnSave, but instead fix ESLint errors on save.

```js
// .vscode/settings.json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

If you open **pages/index.tsx**, you may see ESLint errors. Try saving the file: you will see all those errors corrected automatically. **I can't tell you enough how much time this will save.**

See prettier in action:

![Prettier example](/images/blog/prettier-example.gif)


## Husky: Linting on commit

On way to make sure  the code will stay clean, is to check for ESLint and TypeScript errors before each commit. One way of achieving this is to use Husky, a little program that will run scripts for a given Git command.

**Note: Make sure you have initiated git with `git init` before you continue.**

First, let's add scripts in our package.json that will check our code:

```json
// package.json
{
  // ...
  "scripts": {
    // ...,
    // Will look for TypeScript errors
    "type-check": "tsc --project tsconfig.json --pretty --noEmit",
    // Will look for ESLint errors (if there are fixable errors, it will fix them as well)
    "lint": "eslint --ext js,jsx,ts,tsx --fix"
  },
  // ...
}
```
  
  
Next, we need to install Husky

```sh
yarn add --dev husky
```

Let's now use the scripts we just created to prevent us from committing if there are TypeScript or ESLint errors, by adding this configuration in package.json:

```json
// package.json
{
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "yarn type-check && yarn lint ."
    }
  },
  // ...
}
```

From now on, if we commit our changes, our code will be checked. You can try to mess up with the code (for example, replace `React.FC` with `string` in `pages/index.tsx`) and try to commit. This should happen:

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

If husky did not start on commit, try reinstalling it: `yarn add --dev husky`

_**Note:** If you want to skip the check, you can add a `--no-verify` flag to your commit command. For example: `git commit --no-verify -m "Update README.md"`_

_**Note:** If you just want ESLint check on commit, you can remove `type-check` from the pre-commit hook: `"pre-commit": "yarn lint ."`_

## Lint staged: only check your code when necessary

Checking your code takes time, even more so when the project gets bigger. Sometimes you change only markdown files or CI files, and you don't need your TypeScript code to be checked.

Enters [Lint staged](https://github.com/okonet/lint-staged), which goal is to only run your lint scripts when necessary.

### Install lint-staged

```sh
yarn add --dev lint-staged
```

### Configure lint-staged

We can then create a configuration `lint-staged.config.js` file for lint-staged. Some prefer to configure it [directly in package.json](https://github.com/okonet/lint-staged#packagejson-example), but we have more options by configuring via a dedicated file.

```javascript
// lint-staged.config.js
module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
}
```

As property names, you have the file matchers. As property values, you have the command that will be run against the changed files.

For the TypeScript command, we don't pass `filenames` as TypeScript cannot be run on isolated files.  
For the ESLint command, we pass `filenames` so that we lint only staged files, saving us time.

### Integrate lint-staged with Husky

Now we need to change our Husky command to run lint-staged.

```json
// package.json
{
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  // ...
}
```

To make sur everything is working as intended, you can try the following test:

1. Add an empty block statement in `pages/index.tsx`

```JavaScript
// pages/index.tsx
// Add an empty block statement
{
}
const IndexPage: NextPage = () => (
// ...
```
  
2. Create a new file `pages/test.tsx` with another empty block statement

```JavaScript
// pages/test.tsx
{
}
const TestPage: React.FC = () => <main />
export default TestPage
```

3. Stage and commit only the `pages/index.tsx` file

```sh
git add pages/index.tsx
git commit -m "test"
```

Only the `pages/index.tsx` file will be checked for ESLint errors.

```sh
husky > pre-commit (node v12.18.3)
✔ Preparing...
⚠ Running tasks...
  ✔ Running tasks for **/*.ts?(x)
  ❯ yarn lint /home/paulin/work/paulintrognon.fr/nextjs-typescript/pages/index.tsx [FAILED]
    ✖ yarn lint /home/paulin/work/paulintrognon.fr/nextjs-typescript/pages/index.tsx [FAILED]
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up...

✖ yarn lint /home/paulin/work/paulintrognon.fr/nextjs-typescript/pages/index.tsx:
error Command failed with exit code 1.
$ eslint --ext ts --ext tsx /home/paulin/work/paulintrognon.fr/nextjs-typescript/pages/index.tsx

/home/paulin/work/paulintrognon.fr/nextjs-typescript/pages/index.tsx
  1:1  error  Empty block statement  no-empty

✖ 1 problem (1 error, 0 warnings)
```

_Note: Even if you don't stage the `pages/test.tsx` file, it will still be checked by TypeScript. This is a limitation with TypeScript: it can only be run on the entire project, not just on a subset of files. If you want to force commit despite TypeScript errors, you can always add the `--no-verify` flag to your `git commit` command._
  

### Good job reading this far!

You are now ready to write beautiful TypeScript code without having to worry about committing wrong code! :)

## Bonus - Add unit testing with Jest

A good quality code usually implies unit testing. In this section, we will go a bit further in our bootstrapping by adding the bases for Jest tests.

First, we need to install testing-related packages:

```sh
yarn add --dev jest @types/jest babel-jest jest-watch-typeahead react-test-renderer @types/react-test-renderer identity-obj-proxy
```

You then need to create the following config files:

```json
// .babelrc
{
  "presets": ["next/babel"]
}
```

&nbsp;

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

Let's now add a test file for our `index.tsx` component. I like to add my test files next to my components, but you can also create a dedicated `tests` folder for your tests.

```js
// pages/index.test.tsx

import renderer from 'react-test-renderer'
import IndexPage from '.'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const launch = {
      timestamp: 1605401340000,
      mission: 'Mission Name',
      site: 'Kennedy Space Center',
      rocket: 'Falcon 9',
    }
    const tree = renderer.create(<IndexPage launch={launch} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

In order to run tests, you need to add the following script to your package.json:

```json
// package.json
{
  // ...
  "scripts": {
    // ...,
    "test": "jest"
  },
  // ...
}
```

Now you can run `yarn test` to start your jest tests!

_Note: You can run jest in watch mode by using `yarn test --watch`. Very useful!_

## That's all folks!

You can give me feedback on github: https://github.com/paulintrognon/paulintrognon.fr/issues/8

Official Next.js TypeScript documentation: https://nextjs.org/docs/basic-features/typescript

End result here: https://github.com/paulintrognon/next-typescript

Thanks for reading and happy coding!
