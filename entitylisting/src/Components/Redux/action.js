import axios from "axios"

export const actionTypes={
    GET_REQUEST:"GET_REQUEST",
    GET_SUCCESS:"GET_SUCCESS",
    GET_FAILURE:"GET_FAILURE"
} 

export const getRequest=()=>{
    return {
        type:actionTypes.GET_REQUEST
    } 
}

export const getSuccess=(data)=>{
    return {
        type:actionTypes.GET_SUCCESS,
        payload:data
    } 
}
export const getFailure=()=>{
    return {
        type:actionTypes.GET_FAILURE
    } 
}

export const getData= () => (dispatch, getState)=>{
const getRequestAction=getRequest();
dispatch(getRequestAction)
axios({
    url:'http://localhost:8080/product',
    method:"GET"
}).then((res)=>{
    const getSuccessAction=getSuccess(res.data);
    dispatch(getSuccessAction);
}).catch((err)=>{
    const getErrorAction=getFailure();
    dispatch(getErrorAction)
})
}