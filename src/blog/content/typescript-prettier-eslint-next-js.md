---
title: Start a clean Next.js project with TypeScript, ESLint and Prettier
excerpt: How to create a Next.js app with TypeScript, and how to configure ESLint to make it work with prettier, and finally how to integrate this tooling with Visual Studio Code.
date: '2021-07-02T09:00:00.000Z'
---


**TypeScript** is awesome. So is **Prettier**.

In this post, we will learn how to configure ESLint to make it work with Prettier within a Next.js app, and finally how to integrate this tooling with Visual Studio Code.

Let's do it!

_Note: you can have a look at the end result here: [github.com/paulintrognon/next-typescript](https://github.com/paulintrognon/next-typescript)_

_Note: we will use [yarn](https://yarnpkg.com/) instead of npm throughout this post._
  
## Initiating the project

The easiest and recommended way to get started is to use create-next-app:

```sh
yarn create next-app --typescript
```

This will create a bunch of boilerplate files which help you get started, including a basic .eslint config.

Jump to the generated source code and open up VSCode.

```sh
cd my-app
code .
```

## Configure eslint

To make eslint errors visible in VSCode, you need to install [the ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

I also recommend you tell VSCode to auto-fix eslint errors on save. To do so, create a `.vscode/settings.json` file with the following content:

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
  

Let's try if it worked! Add the `prefer-const` rule to the `.eslintrc` config file:

```json
// .eslintrc
{
  "extends": ["next", "next/core-web-vitals"],
  "rules": {
    "prefer-const": "error"
  }
}
```
  

Now, create a `test.ts` file containing:

```ts
export let APP_VERSION = "v1.0.0"
```

VSCode should display an error, like so:
![prefer-const eslint error example](https://paulintrognon.fr/images/blog/prefer-const-example.jpg)

Try saving the file: VSCode should automatically convert the `let` into a `const`. If it did not work, try closing and reopening VSCode.

To have a nice set of eslint rules, I suggest you install the package `@typescript-eslint/eslint-plugin`:

```sh
yarn add --dev @typescript-eslint/eslint-plugin
```

Then add it to your `.eslintrc` config:
```json
{
  "plugins": ["@typescript-eslint"], // Add
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended" // Add
  ],
  "rules": {
    // You can remove the prefer-const rule, as it is already added by @typescript-eslint/recommended

    // I suggest you add at least those two rules:
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

If you don't like a rule added by `@typescript-eslint/recommended`, don't forget you can turn it off in your `.eslintrc`, like so:
```json
{
  // ...
  "rules": {
    "prefer-const": "off" // Turn rule off
  }
}
```

If you want more rules, check out other eslint extensions such as [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest), [etc](https://www.npmjs.com/search?q=eslint-plugin).

## Configure Prettier

Now that we have eslint up and running, let's add auto-formatting with Prettier.

First, add prettier dependencies:

```sh
yarn add --dev prettier eslint-config-prettier
```

- `prettier` is the base package that will format the files
- `eslint-config-prettier` will prevent conflicts between prettier and eslint rules.

Next, create a `.prettierrc` file, and configure it according to your preferences. See all available options here: [https://prettier.io/docs/en/options.html](https://prettier.io/docs/en/options.html)

```json
// .prettierrc
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

Then, change your `.eslintrc` file like so:
```json
// .eslintrc
{
  // ...
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier" // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  // ...
}
```
  

Now let's configure VSCode to actually format our code according to our prettier configuration file. To do so, install [VSCode's prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Then, you can tell VSCode to format the code on save, by editing our `.vscode/settings.json` file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add those two lines:
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

From now on, every time you save a file, it will be formatted using prettier! **You might need to restart VSCode to make that configuration work.**

## Husky: Checking for errors, linting and formatting on commit

I strongly recommend you don't rely only on "format on save" VSCode features, but you also add another layer of safety by running eslint and prettier on each commit. You can also add extra checks on commit, like TypeScript type checking.

One way of achieving this is to use Husky, a little program that will run scripts for a given Git command.

```sh
# Install Husky
yarn add --dev husky
```
  
  
**You then need to enable husky by running:**

```sh
yarn husky install
```

**⚠️ In the future, after you or someone else clone the project, you will need to run `yarn husky install` to enable husky**

Now we need to add the git hook:   

```sh
yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint --fix . && yarn prettier --write ."
```
  
Let's break down what this command does. On each commit, husky will:
- Run the `tsc` command to make sure there are no TypeScript errors
- Run the `lint` command to make sure there are no ESLint errors
- Format our code using prettier

To try if it works, try messing up with the code (for example, replace `export const APP_VERSION = 'v1.0.0'` with `export const APP_VERSION: number = 'v1.0.0'` in the `test.ts` file we created earlier) and try to commit. This should happen:

```sh
$ git add -A
$ git commit -m "test"
yarn run v1.22.5
$ /home/paulin/perso/projets/paulintrognon/tests/foobar/node_modules/.bin/tsc --noEmit
test.ts:1:14 - error TS2322: Type 'string' is not assignable to type 'number'.

1 export const APP_VERSION: number = 'v1.0.0'
               ~~~~~~~~~~~


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
husky - pre-commit hook exited with code 2 (error)
```

_**Note:** If you want to skip the check, you can add a `--no-verify` flag to your commit command. For example: `git commit --no-verify -m "Update README.md"`_
  
  
## Lint staged: only check your code when necessary

Checking your code takes time, even more so when the project gets bigger. Sometimes you change only markdown files or CI files, and you don't need your TypeScript code to be checked.

Enters [Lint staged](https://github.com/okonet/lint-staged), which goal is to only run your lint scripts when necessary, and only on the necessary files.

### Install lint-staged

```sh
yarn add --dev lint-staged
```

### Configure lint-staged

Then create a configuration `lint-staged.config.js` file for lint-staged. Some prefer to configure it [directly in package.json](https://github.com/okonet/lint-staged#packagejson-example), but we have more options by configuring via a dedicated file.

```javascript
// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint and format TypeScript and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
```

As property names, you have the file matchers. As property values, you have the command(s) that will be run against the changed files.

Each matcher will be run in parallel, but the array values will be run in sequence. We have separated TypeScript checks and ESLint checks into 2 matchers so that they can be run in parallel. We have to separate prettier format of TS files and other files, **because we don't want ESLint to fix errors in TS files and at the same time having Prettier format the files**: that would results in conflicts.

For the TypeScript (`tsc`) command, we don't pass `filenames` as TypeScript cannot be run on isolated files.  
  

Now we need to change our pre-commit hook (in the `.husky/pre-commit` file):

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged # Replace the last line
```

Let's try the new configuration. Try committing the `test.ts` file from earlier. If it contains errors, you won't be able to commit it.  

```sh
$ git add test.ts # Add a file with TypeScript errors...
$ git commit -m "add test.ts" # ...and this will fail!
```

Now try editing and committing the `README.md` file. On commit, you will see that only the prettier will be run, and not the other ones.

```sh
$ git reset # un-add files
$ echo "# My Great App!" >> README.md # Replace README.md content
$ git add README.md # Stage README.md
$ git commit -m "update readme" # ...and only prettier will run on commit!
```

## Good job reading this far!

You are now ready to write beautiful TypeScript code without having to worry about committing anything dirty! :)

You can have a look at the end result here: https://github.com/paulintrognon/next-typescript  
If you clone this repository, **don't forget to run `yarn husky install`** to enable husky

## That's all folks!

You can give me feedback on github: https://github.com/paulintrognon/paulintrognon.fr/issues/8

Official Next.js TypeScript documentation: https://nextjs.org/docs/basic-features/typescript

Thanks for reading and happy coding!
