# Mocktail

This project was bootstrapped with [**Create React App**](https://github.com/facebook/create-react-app), using the [**Redux**](https://redux.js.org/) and [**Redux Toolkit**](https://redux-toolkit.js.org/) template.

## Bundled Enhancements

- [**Typescript**](https://www.typescriptlang.org/) enabled for better dev experience.
- With [**Fluent UI**](https://developer.microsoft.com/en-us/fluentui#/controls/web)'s robust, up-to-date web controls, save yourself from creating atomic and molecular UI controls from scratch.
- [**Office UI Fabric Icons**](https://uifabricicons.azurewebsites.net/) support to get access to huge set of awesome icons.
- With [**sass-loader**](https://www.npmjs.com/package/sass-loader) load a Sass/SCSS file and compiles it to CSS.
- [**Theming**](https://aka.ms/themedesigner) infra.
- Uses [**React Helmet**](https://www.npmjs.com/package/sass-loader) to add customized headers for each page, if required, for better SEO.
- With [**React Router DOM**](https://www.npmjs.com/package/react-router-dom) use the power of [**React Router**](https://reactrouter.com/) in web.
- A Predictable, performant and flexible state container using [**react-redux**](https://www.npmjs.com/package/react-redux).
- Dynamically load redux reducers and redux-saga sagas as needed, instead of loading them all upfront using [**redux-injectors**](https://www.npmjs.com/package/redux-injectors).
- [**Connected React Router**](https://www.npmjs.com/package/connected-react-router) to synchronize your router state with redux store.
- App level store with useful enhancers and middleware such as [**Redux-Saga**](https://redux-saga.js.org/) and [**Logger for Redux**](https://www.npmjs.com/package/redux-logger).
- Configured completely to be a first-class [**Progressive Web App**](https://developers.google.com/web/progressive-web-apps/), however the **offline/cache-first** behavior is disabled by default as it comes with some [**pitfalls**](https://github.com/facebook/create-react-app/issues/2398) and should be enabled consciously.

  > To enable caching mode, simply switch serviceWorker.unregister() to serviceWorker.register() in [**index.tsx**](https://github.com/rizz-wan/mocktail/blob/main/src/index.tsx):

  ```diff
  - serviceWorkerRegistration.unregister();
  + serviceWorkerRegistration.register();
  ```

- A performance relayer, using [**web-vitals**](https://github.com/GoogleChrome/web-vitals), that allows you to measure and analyze the performance of your application using different metrics.

  > To measure any of the supported metrics, just pass a function into the reportWebVitals function in [**index.tsx**](https://github.com/rizz-wan/mocktail/blob/main/src/index.tsx):

  ```jsx
  reportWebVitals(console.log);
  ```

- World class testing environment with [**jest**](https://jestjs.io/), [**jest-dom**](https://github.com/testing-library/jest-dom#with-typescript) and [**react testing library**](https://testing-library.com/docs/react-testing-library/intro) for faster and reliable development.

## Usage

Use this template to start miles ahead in your next venture with the power of awesome tooling and configurations, using mocktail is simple, just clone/download the repo and follow the markers:

- Simply remove the chunks marked with `Chore:` marker, they are there just for reference and help you unblock should you encounter any blockers.
- Explore and verify the chunks marked with `Tip:` marker.
- Alternatively you can use [**mocktail-air**](https://github.com/rizz-wan/mocktail-air) which has most of the cleanup work done already.

## Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br />
Open [**http://localhost:3000**](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner, which runs all the test suites once.

#### `npm run test:update`

Launches the test runner, which runs all the test suites once and updates any failing snapshot tests.

#### `npm run test:coverage`

Launches the test runner with code coverage, which runs all the test suites and report the coverage status in the terminal right then and there.

<pre>
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |                   
 src                   |     100 |      100 |     100 |     100 |                   
  app.tsx              |     100 |      100 |     100 |     100 |                   
  index.tsx            |     100 |      100 |     100 |     100 |                   
  reportWebVitals.ts   |     100 |      100 |     100 |     100 |                   
</pre>

You can also view the detailed coverage on the web by opening `index.html` file in generated `./coverage/lcov-report` folder

#### `npm run test:watch`

Launches the test runner in the interactive watch mode, which runs all the test suites and presents a bunch of additional useful options, such as:

- to run all tests again
- to run only failed tests
- to quite the watch mode
- to filer tests by filename or test name using regex pattern
- or you can simply hit enter to run the tests again

See the section about [**running tests**](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [**deployment**](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run clean`

Removes node_modules and coverage folders to make the solution lightweight for all the good uses.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

- You can learn more in the [**Create React App documentation**](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [**React documentation**](https://reactjs.org/).
- Start with [**Redux Essentials tutorial**](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) or [**Redux Fundamentals tutorial**](https://redux.js.org/tutorials/fundamentals/part-1-overview) to know more about Redux.
- Explore [**Redux-Saga documentation**](https://redux-saga.js.org/docs/introduction/GettingStarted) for more.
- Download the [**React DevTools**](https://reactjs.org/link/react-devtools) for a better development experience.

## Feedback & Contribution

- If you find any bugs or issues please report them on the [**Issue Tracker**](https://github.com/rizz-wan/mocktail/issues).

> If you would like to contribute to this project please consider [**forking this repo**](https://github.com/rizz-wan/mocktail/fork), making your changes and then creating a new [**Pull Request**](https://github.com/rizz-wan/mocktail/pulls) back to the main code repository.

## License

MIT License

Copyright (c) 2021 Rizwan Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
