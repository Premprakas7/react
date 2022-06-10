import { actionTypes } from "./action";

export const initData={
    data:[],
    loading:false,
    error:false
}

export const reducer=(state=initData, action)=>{
switch(action.type){
    case actionTypes.GET_REQUEST:{
        return{
           ...state,
           loading:true
        } 
    }
    case actionTypes.GET_SUCCESS:{
        return{
            ...state,
        data:action.payload,
        loading:false
       
        } 
    }
    case actionTypes.GET_FAILURE:{
        return{
            ...state,
            error:true,
            loading:false
        } 
    }
    default:{
        return state
    }
}
}
