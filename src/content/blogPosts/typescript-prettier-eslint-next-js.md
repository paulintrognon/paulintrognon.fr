---
title: Start a Next.js project with TypeScript, Eslint and Prettier
excerpt: How to add TypeScript to your Next.js app, and how to configure eslint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.
date: '2020-03-28T10:00:00.000Z'
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

Then, let's add TypeScript. First, we need to install TypeScript's dependencies.

```sh
# Install TypeScript
yarn add --dev typescript @types/react @types/node
```

Now, let's replace the default **pages/index.js** by this new **pages/index.tsx** file:

```jsx
import React from 'react'

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
  {
    props: {
      name: query.name || 'World',
    }
  }
}
```

We can now start the server using **yarn dev**.

```sh
# Start the dev web server
yarn dev
```

Next will detect that we are now using TypeScript and will automatically create of us a **tsconfig.json** and a **next-env.d.ts** file.

Let's change the strict field in the tsconfig.json file from **false** to **true**:

```javascript
// Edit in tsconfig.json
"strict": true,
```

Now, if we try to start and access our app, Next.js will through an error, because we have to specify the types (that make sense, that's why we want to use TypeScript in the first place!)

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

The same code with Type immediatly throughs an error: the `Props` Type does not mach the Type returned by the `getServerSideProps()` function.

This is because `query.name` can be an array of string. For example, for localhost:3000?name=Margot&name=Paulin, `query.name` would be equal to `['Margot', 'Paulin']`.

We have to tweak `getServerSideProps()` to make it match `Props`.

```jsx
export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const name = query.name instanceof Array ? query.name.join(', ') : query.name
  return {
    props: {
      name: name || 'World',
    },
  }
}
```

As you can see, TypeScript helped us catch a bug before it happened, thanks to types! Awesome!

## Add Eslint and Prettier

### Eslint

Eslint will make sure we are following all good practices of TypeScript and React.

Let's install eslint:

```sh
# Add Eslint, and a TypeScript parser for Eslint, and a react eslint plugin
yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

### Prettier

Prettier is a tool that handles code formating for us, and saves us lots of time.

Let's install Prettier:

```sh
# Add Prettier, and eslint plugin and config for prettier
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
```

### Configuration

Now, we need to create an **.eslintrc.js** file to configure eslint and prettier. In this file, you can choose the coding styles you prefer: indentation size, tabs or spaces, semi columns or not, etc.

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
    'prettier/@typescript-eslint', // Prettier rules
    'plugin:prettier/recommended'
  ],
  rules: {
    // Configure your prettier rules here
    'prettier/prettier': [
      'error',
      {
        // Change your rules accordingly to your coding style preferencies. https://prettier.io/docs/en/options.html
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
  },
};
```

Great! Now, if you are using VSCode, you might want to install [the eslint plugin for vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), which will enable you to view eslint errors directly in your editor.

To enable the true powers of eslint and prettier, let's configure vscode.  
You can either create a .vscode/settings.json file, or put those settings globally on your vscode settings.json file.

```js
// .vscode/settings.json
{
  // This should match your .eslintrc.js config file. Usefull when you create a new file.
  "editor.tabSize": 2,

  // Tell vscode enable autocorrect eslint errors on save.
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Now, if you open the pages/index.tsx page, you should see eslint errors. Try saving the file: you will see all those errors corrected automatically. **I can't tell you enough how much time this will save.**

&nbsp;

You can give me feedback on this article on github: 

Happy coding!