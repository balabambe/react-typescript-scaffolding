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
- eslint airbnb typescript
- sass (dart-sass)
- fontawesome
- bootstrap 5
- react-bootstrap 2

## Specials
I have made for custom router-outlet by react-router-config and react-router-dom, you can just import and put the `<RouterOutlet>` component by render sub route to show sub pages.
You can notice the following files here:
- `/src/components/RouterOutlet.tsx`
- `/src/router/router.ts`

Files for example:
- `/src/layouts/MainLayout.tsx`
- `/src/pages/Posts/index.tsx`

## Router Config

The router config I was combine the path by recursive function to put parents path, let child route path to combine full path for react router, so please refer the `/src/router/router.config.ts` settings to set the route.

## API Calls
I was integrate the redux(redux-thunk) and axios by using dispatch to call APIs, and set response data into reducer, you can see the files here:
- `/src/store/post/actions.ts`
- `/src/store/post/reducers.ts`

## Usefull Components
### Navbar
Location: `/src/components/Navbar.tsx`

The nav bar will only render second child route link, if you want some route no show, please put the `hideNav: true` params in `router.config.ts`, or you want to custom the nav link, you can customize the component.

### Breadcrumbs
Location: `/src/components/Breadcrumbs.tsx`

The component will check the current route location and show current path way on page, if the path way you want to not show, you can put the `hideBreadcrumb: true` in `router.config.ts`, or customize the component.
