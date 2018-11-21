# AUTO1 Code Challenge

This is the solution of the AUTO1 Code Challenge.

Below you can find information on how to configure, run, and bundle this application into a production build as well as supplementary information about the solution architecture and applied concepts.

> PS: It is recommended to use yarn as the package manager once it is the only existing lock file. You can also use the npm equivalent commands, but knowing you will lose the yarn lockfile consistency.

### Tech stack
    node  v8.12.0
    yarn v1.12.3
    react v16.6.3
    generated with create-react-app v2.1.1


> For the following sections, consider the root source directory (_./src_)

## Configuration

This application uses an environment file as the config source. 
There are 2 (two) keys on the .env file contained in this application.

* `NODE_PATH` is the relative path for the solution modules (this value can **NOT** be changed!)
* `REACT_APP_ENDPOINT_URL` is the endpoint url for the api requests. If not provided, the endpoint *http://localhost:3001* is considered as the default.

## Architecture

There is an awesome approach of how organize your React application proposed by [Alexis Mangin](https://twitter.com/alexmngn) in this excellent Medium  [article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) which I have been applying in my projects.

This approach leads a more semantic understanding of you application and make the scale (growing) a lot easier for both maintaining and adding new features.

### Components

Essentially we have 2 main directories that contains our components. The _components_ and _scenes_.

All the components contained in the _components_ folder are global components (identity base).

All the components contained in the _scenes_ folder are the main views, the ones who will be rendered by the routes of the `react-router`.

If a component is used twice or more times, it should be a global component, but if a component is used only once, it should be contained in its scope, for example:

`scenes/Detail/components/Info`

The scene _Detail_ is a main view rendered by the `react-router`, which has the nested component _Info_ that is used only by the _Detail_ itself, that's the reason it is contained inside the `scenes/Detail/components` directory.
The _Info_ component use some global components such as `components/Container` and `container/Button`, for example.

Global components can not be connected by redux. They must keep pure. Scenes and scene components must be connected with redux.

### Actions and Reducers

Are in the `actions` and `reducer` directories.

There are the scene-based `actions` and `reducers` _detail_ and _main_, and the app-based `actions` and `reducers`  _app_ and _store_.

I am using a lib called `redux-persist` to persist the redux states in the *Local Storage*. In this application, only the states generated by the reducer _store_ are being persisted.


## Running

At the root of the application, run the following commands.
```bash
yarn
yarn start
```

You can access the app at _http://localhost:3000_.

> Please check the [Observations: Unexpected WARNING](#unexpected-warning)

## Tests

At the root of the application, run the following commands.
```bash
yarn
yarn test
```

### Tests overview

There are only few unit tests and one (1) snapshot test. You can check the tests in the following paths.
```bash
src/__tests__/app.unit.test.js
src/components/Button/__tests__/unit.test.js
src/actions/store/__tests__/unit.test.js
src/reducer/store/__tests__/unit.test.js
src/scenes/Detail/__tests__/snapshot.test.js
src/scenes/Main/components/Filter/__tests__/unit.test.js
```
Testing is essential for application reliability and consistence, and for that reason we use to spend a lot of time designing and implementing them. In this application, only few simple tests were written just to prove the concepts.

`jest` and `enzyme` were used for the test suite with the default assertion lib.

TDD was not applied in this development.

> Please check the [Observations: Unexpected WARNING](#unexpected-warning)

## Production build

At the root of the application, run the following commands.
```bash
yarn
yarn build
```

You will have a production build into the `build` directory under the application root.

> PS1: The build process takes in consideration the .env file and all its keys and values.

> PS2: Once you serve the production build the assets will be cached by the `service worker`. So, after the first serving, your application will be available even when the server is down, but you will still need the backend working (mock-server) for a proper behaviour.

### Optimization

In webpack 4 a lot of optimizations that were required in the past are already implemented by default, as the `UglifyJS` and the `CommonsChunkPlugin` (which now is `SplitChunksPlugin` and is already by default in the config under the prop _optimization.splitChunks_) for example.

You can see a lot of them in this [ article](https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size) by [Ivan Akulov](https://twitter.com/iamakulov).


### Serving the production build

To serve the application, run the following commands (as the create-react-app says):
```bash
yarn global add serve
serve -s build
```

You can access the app at _http://localhost:5000_.

### Containerized production build

You can also serve this application as a Docker container. First you need to build the image with the following commands:
```bash
docker build -t auto1 .
```
And then runs the container.
```bash
docker run -d -p 3002:3002 auto1
#or
docker run -d --net host auto1 #works only on linux
```

You can access the app at _http://localhost:3002_.

> PS: Docker multi-stage build are being used in order to make the smaller image possible.

## Roadmap and Improvements

There are lots of improvements that can be made in the project at all, and I will list some of them right below:

* **Default sass variables/functions/mixins** - In this project I am using `sass` as the css preprocessor. In the chosen architecture, each component has its own scss file, which is awesome considering that the context should be isolated. The point here is that I think the defaults of the sass could be better organized and distributed across the components.

* **Storybook** - As the application grows, its complexity also increases. Considering this, a good option is to have a storybook to create an inventory of the components and their states, as well as to code revisions and documentation.

* **Test Coverage** - Tests are essential for reliability and consistency, so increase the test coverage is not a option but an obligation.

* **Local storage** - The `/colors` and `/manufacturers` responses are being stored in the local storage without an expiration key. As the local storage do not have a native feature to expire the contained data (as Cookies), it is certainly needed for recycling the data.

* **PWA - Service worker** - There is already a `service worker` responsible for caching the application assets (chunks, styles, images, etc) in this application. A next step would be caching some external information that make sense to be cached.

## General Observations:

### Unexpected WARNING

When the application is started in dev mode, or the tests are run, an unexpected WARNING blows.

    Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
          in Route (at App.js:29)
          in App (at app.unit.test.js:7)

This happes because the **component** prop-type of the `Route` component of the `react-router` lib expect a function (which should be a React Component), but an object is given instead.

An object is given because the _scenes_ are being lazy loaded, once they need to load only when requested.

It's weird because the official article of React about [Code Splitting](https://reactjs.org/docs/code-splitting.html) tells to do exactly the same thing that is being done in this project. That may be a version issue of the router lib. Dive deeper in this problem is needed to solve this warning.

### Mock-Server - CORS

To properly consume the Mock-Server I had to add CORS support to it. Just:
````
npm i --save cors
````

And in the `src/index.js` right below `port` constant:
```javascript
app.use(require('cors')());
```

### Cars by Page information - Misunderstanding

In the header of the list (`ListHeader` component in this solution) there is the following information:

_Showing_ `curr_showing_cars` _of_ `total_cars` _results_

Where `curr_showing_cars` is the total of cars currently showing in the list, and the `total_cars` are the total considering all the filters.

The point here is that is not possible to calculate the `total_cars` with the information that **Mock-Server** retrieves(`{ cars: [...], totalPageCount }`). We will have to consider that any page except the last have 10 cars, and will always need to make an extra request to the last page of a specific filter and count the size of the `cars` property. 

The below piece of _pseudocode_ shows how would be the calc:
```javascript
((totalPageCount - 1) * qttCars) + (qttCarsLastPage);
```
Where:
```javascript
qttCars = 10; // by default
qttCarsLastPage = req.get('/cars?page=' + totalPageCount).cars.length; // the extra request always to the last page
```

This application does not implement this approach because it implies a lack of performance. It's a backend issue and have to be solved there, not workarounded by the frontend.

In this implementation, only in the last page you will be able to see the correct value. The following equation is being used:

```javascript
(totalPageCount * qttCars) - (qttCars - qttCarsCurrentShowing);
```

### Responsiveness

Was not considered for this development.