# Alasco 24hours

## Introduction

This project is comprised of three javascript challenges. All three tasks are implemented in this app with minimal UI for first two tasks.

*Please read [COMMENTS.md](./COMMENTS.md) for more details*

## `Components`

This app is built with certain essential components:

 * ReactJS v16.6
 * @Reach Router (built on React Suspense)
 * Webpack 4 
 * Webpack cli
 * Redux
 * Context API
 * Jest and Enzyme
 * Husky (accessing git hooks)
 * Babel 7
 * React Material UI
 * axios
 * JSS (CSS-in-JS)
 * HMR (Hot Module Replacement)
 * CSS hot reload


## `Features`

 * Webpack v4 for more optimized build on both local and production environment
 * `Husky` is added for linting and running unit tests before each commit. It makes sure zero code smells using `Eslint` and `Prettier`
 * Adhoc Presets `Webpack Visulaizer` is added to analyze production build for better app modules management.
 * `JSS` is used with [Material-UI](https://github.com/mui-org/material-ui) for modular css to avoid main thread blocking
 * Webpack config is seperated and kept very modular to adhere with app requirements for large scale in future
 * Webpack `mini-css-extract-plugin` is used in production build for lightweight css.

## `Get Started`

To install dependencies:  ```yarn```

To run the server locally: ```yarn start```

To create production build:  ```yarn build```

To commit code: ```git add .``` -> ```git commit -m "YOUR_MESSAGE"``` (husky begins for pre-commit hook)

## Notes
* use `yarn` to maintain `yarn.lock` and node_modules registeries
