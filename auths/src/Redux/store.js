import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
import { taskReducer } from "./app/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: taskReducer,
});

/**
 * @param {redux state} state
 */

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhancer);
console.log(store.getState());
