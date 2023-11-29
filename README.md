![Countdown timer in dark mode](/countdown-timer-dark-mode.png)

# ⏰ Countdown Timer

A simple countdown timer made with React and TypeScript. It allows you to:

- Track time remaining until the beginning of the year 2024
- Switch between dark and light mode

## 🧐 What is inside?

This project mainly uses:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 🏡 Project Structure

### src/components

For each folder inside `components`, there is a file for the component itself, styles and tests. Optionally, you could initiate files for helpers, constants and types if needed. To me, this makes a lot more sense as everything related is grouped together and easy to find.

```
Component.tsx - The actual React component
Component.styles.ts - Styles for the component
Component.test.tsx - Tests for the component
Component.types.ts - Types being used within the component
Component.helper.ts - Helpers for the component
```

### src/providers

Each file inside `providers` give you a React `Context` and `Provider` for passing data that can be used across children components within your application.

These types of data could include:

- Theme data (like dark or light mode)
- User data (currently authenticated user)
- etc.

### App.tsx

`App.tsx` has the root component of the application and it wraps every view and component that are handled with hierarchy in React.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\
To learn React, check out the [React documentation](https://reactjs.org/).

## 📝 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run serve`

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 🚀 Deployment

The application has been deployed on [Codesphere](https://codesphere.com). Open [workspace-URL](https://47986-3000.2.codesphere.com) to see a live demo.

You can learn about creating and deploying app in Codesphere [documentation](https://docs.codesphere.com/getting-started/getting-started-with-codesphere).

## 📄 License

This project is licensed under the MIT license, Copyright (c) 2023 Sabbir Ahmed. For more information see `LICENSE.md`.
