
import {combineReducers, legacy_createStore, applyMiddleware} from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
import { authReducer } from '../auth/reducer';

export const rootReducer=combineReducers({ecommData:reducer},authReducer)

// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose; 

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk));
