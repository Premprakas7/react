
import {legacy_createStore} from "redux"
import { incrementCountAction } from './action';
import { reducer } from './reducer';

// class Store{
//   #reducer;
//   #state;
//   #listeners;
//   constructor(reducer, initState){
//     this.#reducer=reducer;
//     this.#state=initState;
//     this.#listeners=[];
//   }
//   getState(){
//     return this.#state
//   }
//   dispatch(action){
//     const oldState=this.#state;
//     this.#state=this.#reducer(this.#state, action);
//     if(oldState !==this.#state){
//       this.#listeners.forEach((listener)=>listener)
//     }
//   }
// }
const initState={count :0}
const store=legacy_createStore(reducer, initState);
 store.dispatch(incrementCountAction(1));
 store.dispatch(incrementCountAction(2));

 export default store;
