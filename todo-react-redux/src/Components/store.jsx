
import {legacy_createStore} from "redux"
import { todosReducer } from "./reducer"

const initState={todos:[]}

const store=legacy_createStore(todosReducer,initState);

export default store;