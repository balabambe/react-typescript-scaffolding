# react-typescript-scaffolding

## Tech Stack
- create-react-app (react-scripts) 4.0
- React 17
- TypeScript 4
- react-router 5.2
- react-router-dom 5.1
- react-router-config 5.3
- redux 4.1
- react-reddux 7.2
- redux-thunk 2.3
- redux-devtools-extension 2.13 (for chrome dev inspector use)
- axios 0.21
- craco-alias 3.0
- craco-plugin-scoped-css 1.1
- tailwindcss 2.2
- eslint airbnb typescript

## Specials
I have made for custom router-outlet by react-router-config and react-router-dom, you can just import and put the `<RouterOutlet>` component to simple render sub route to show sub pages.
You can notice the following files here:
- /src/components/RouterOutlet.tsx
- /src/router/router.ts

For example:
- /src/layouts/MainLayout.tsx
- /src/pages/Posts/index.tsx


## API calls
I integrate the redux(redux-thunk) and axios by using dispatch to call APIs, and set response data into reducer, you can see the files here:
- /src/store/post/actions.ts
- /src/store/post/reducers.ts
