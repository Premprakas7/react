
import {legacy_createStore} from "redux"
import { incrementCountAction } from './action';
import { reducer } from './reducer';


const initState={count :0}
const store=legacy_createStore(reducer, initState);
 store.dispatch(incrementCountAction(1));
 store.dispatch(incrementCountAction(2));

 export default store;
