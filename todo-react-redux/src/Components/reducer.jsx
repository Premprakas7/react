import { todosActions } from "./action";


export const todosReducer=(state , action)=>{
    switch(action.type){
        case todosActions.GET_TODOS_REQUEST:{
            return state
        }
        case todosActions.GET_TODOS_SUCCESS:{
            return{
                ...state,
                todos:action.payload
            } 
        }
        case todosActions.ADD_TODOS_FAILURE:{
            return state
        }
        case todosActions.ADD_TODOS_REQUEST:{
            return state
        }
        case todosActions.ADD_TODOS_SUCCESS:{
            return{
                ...state,
                todos:action.payload
            } 
        }
        case todosActions.GET_TODOS_FAILURE:{
            return state
        }
        default:
            return state
    }
}