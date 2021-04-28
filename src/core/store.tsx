import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createHashHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducer";
import rootSaga from "./saga";

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware ]; 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history)
    }),
    composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };

