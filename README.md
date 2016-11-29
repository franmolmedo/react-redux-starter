# ReactReduxStarter

This starter creates a basic scaffolding of a FRONTEND app including
  * Asp.net Core server.
  * React as UI layer
  * React-Router to allow navigation.
  * Redux for managing application state.
  * Sass styles

## Features
  This starter includes the following top notch technologies:
  * Immutable.js
  * ES-Lint
  * Babel plugin (ES2015)
  * HMR

## Requirements
### Windows
  * Node.js installed globally (at least 4.5 version): https://nodejs.org or using chocolatey(https://chocolatey.org/): choco install nodejs
  * Yarn: Needs to be installed globally: npm install -g yarn or using chocolatey:
  choco install yarn
  * .NET Core SDK for Windows: https://go.microsoft.com/fwlink/?LinkID=809122

### Prefered IDEs
  * Visual Studio Code
  * Atom
  * WebStorm
  * Brackets

## How to use
  * Clone/Fork the project to a desired folder.
  * In CMD go to the previous folder and type npm install. It will download all project dependencies (it will take some time).
      - [Yarn]: yarn install

### DEBUG
  * Once again in your command prompt type npm run start. The application will be launched using the webpack dev server allowing to make changes in real time without reloading the page.
      - [Yarn]: yarn start

  * There is a separate configuration for bundling vendor files and application file in development.
      - Generating vendor bundle: npm run dll or yarn dll
      - Launch the dev-server without bundling vendors: npm run start:nodep or yarn start:nodep

### PUBLISH
  * In your command prompt execute npm run build and it will pass all tests, generate the bundles and create the production ready app. The result would be published in the build folder.
      - [Yarn]: yarn build

### TEST
  * Type npm run test: It will launch the test ready environment.
      - [Yarn]: yarn test
  * Test with coverage: type npm run test:cover or yarn test:cover
  * Test with watcher: type npm run test:watch or yarn test:watch

### LINT
  * Type npm run lint and all your lint rules will be checked.
      - [Yarn]: yarn lint
