# Hello!

Thanks for taking the time to review my code challenge submition. I really enjoyed making this and I hope you like it.

# Libraries Used

* *Language*: TypeScript
* *View Layer*: React 16.12 (using Hooks exclusively)
* *Application State*: Redux
* *Side Effect Handler*: Redux Saga
* *Immutability*: Immutable.js
* *Data Visualization*: [Nivo]('http://nivo.rocks')
* *Component Library*: Material UI
* *Memoization*: Reselect

# Why did you make an entire app?

Three reasons:

1. I had the time. My submition wasn't likely to get reviewed during Thanksgiving week so there was no need to rush.
2. I wanted to submit something that could possibly resemble production code. Writing this in codepen with jQuery was certainly an option, but this is a better example of my skills.
3. I wanted a foundational application for personal projects that incorporated all the libraries you see.

# Personal Critique

I included the lirbaries I did because I see how, together, they make a robust application space that can be extended to do complex things in ways that can be reasoned about without too much difficulty.

That said, I am by no means an expert at some. I'm relatively new to sagas, and I likely do not have optimal patterns in place, particularly in the root saga. While I've used TypeScript for years, I still get hung up on complex types from time to time. You'll notice, for instance, I use `any` in a few places. This was to avoid getting into generics for the excersice.

Aside from those things, there was one bug I spent some time debugging but couldn't satisfactorially resolve. Sending a jobcoin on enter. Despite the code being nearly identical to the code for login, it simply does not work. A real mystery, that.

Overall, I'm pleased with how this turned out. I'm looking forward to feedback on what could have been done differetly.

----


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
