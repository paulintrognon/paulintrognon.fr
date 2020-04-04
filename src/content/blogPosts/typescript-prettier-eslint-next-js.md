---
title: Start a Next.js project with TypeScript, Eslint and Prettier
excerpt: How to add TypeScript to your Next.js app, and how to configure eslint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.
date: '2020-04-04T10:00:00.000Z'
---


**TypeScript** is awesome. So is **Prettier**.

In this post, I will show you how to add TypeScript to your Next.js app, and how to configure eslint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.

Let's do it!
  
## Initiating the project

Let's start by creating a new next.js project.

```sh
# Create a new next.js app using the official starter
yarn create next-app my-app

# Jump in the app's folder
cd my-app
```

## Adding TypeScript

First, we need to install TypeScript's dependencies.

```sh
# Install TypeScript
yarn add --dev typescript @types/react @types/node
```

Now, let's replace the default **pages/index.js** by this new **pages/index.tsx** file:

```jsx
// pages/index.tsx

/*
 * Will display "Hello World!" unless we specify a name in the url
 * http://localhost:3000?name=Margot will display "Hello Margot!"
 */ 
const Home = ({ name }) => (
  <div>
    <p>Hello {name}!</p>
  </div>
)
export default Home

/*
 * More information about getServerSideProps:
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      name: query.name || 'World',
    }
  }
}
```

We can now start the server using **yarn dev**.

The app will display **Hello world!** unless we specify a name in the url. For example, http://localhost:3000?name=Margot will display "Hello Margot!"

```sh
# Start the dev web server
yarn dev
```

Next.js will detect that we are now using TypeScript and will automatically create of us a **tsconfig.json** and a **next-env.d.ts** file.

Let's change the strict field in the tsconfig.json file from **false** to **true**:

```javascript
// tsconfig.json => Change "strict" to true 
"strict": true,
```

Now, if we go back to our app, we would see an error, because we have to specify the types (that make sense, that's why we want to use TypeScript in the first place!)

Here is the updated code with types:

```jsx
import React from 'react'
import { GetServerSideProps } from 'next'

type Props = {
  name: string
}

const Home: React.FunctionComponent<Props> = ({ name }) => (
  <div>
    <p>Hello {name}!</p>
  </div>
)
export default Home

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  return {
    props: {
      name: query.name || 'World',
    }
  }
}
```

Annnd... We get another error!

The `Props` type does not seem to mach the type returned by the `getServerSideProps()` function.

This is because `query.name`, which we assumed would be a string, can also be an array of strings.  
For example, url http://localhost:3000?name=Margot&name=Paulin would imply `query.name = ['Margot', 'Paulin']`.

&nbsp;

We have to tweak `getServerSideProps()` to fix this issue.

```jsx
export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const name = query.name instanceof Array ? query.name.join(', ') : query.name
  return {
    props: {
      name: name || 'World',
    }
  }
}
```

Now, http://localhost:3000?name=Margot&name=Paulin will display **Hello Margot and Paulin!**

As you can see, TypeScript helped us catch a bug at compile time, thanks to types! Awesome!

## Add Eslint

Eslint will make sure we are following all good practices of TypeScript and React.

Let's install eslint:

```sh
# Add Eslint, and a TypeScript parser for Eslint, and a react eslint plugin
yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Now, we need to create an **.eslintrc.js** file to configure eslint.

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true } // Allows for the parsing of JSX
  },
  extends: [
    'eslint:recommended', // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
  ],
  rules: {
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
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

**You do not need to install any Prettier plugin to VSCode to make Prettier work**. A much better option is to include Prettier rules into eslint.

Let's edit our **.eslintrc.js** file to do so:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "plugin:jsx-a11y/recommended",
    
    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    
    // Include .prettierrc.js rules
    'prettier/prettier': [ 
      "error", {}, { "usePrettierrc": true }
    ],

    'react/prop-types': 'off',
  },
};
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

If you open **pages/index.tsx**, you should see eslint errors. Try saving the file: you will see all those errors corrected automatically. **I can't tell you enough how much time this will save.**

See prettier in action:

![Prettier example](/images/blog/prettier-example.gif)

## That's all folk!

You can give me feedback on this article on github: https://github.com/paulintrognon/paulintrognon.fr/issues

Happy coding!