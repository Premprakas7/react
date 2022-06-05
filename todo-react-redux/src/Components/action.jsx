
export const todosActions={
    GET_TODOS_REQUEST:"GET_TODOS_REQUEST",
    GET_TODOS_SUCCESS:"GET_TODOS_SUCCESS",
    GET_TODOS_FAILURE:"GET_TODOS_FAILURE"
}

export const getTodoRequest=()=>({
    type:todosActions.GET_TODOS_REQUEST
});

export const getTodoSuccess=(data)=>({
    type:todosActions.GET_TODOS_SUCCESS,
    payload:data
});

export const getTodoFailure=()=>{
    type:todosActions.GET_TODOS_FAILURE
}