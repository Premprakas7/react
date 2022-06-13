import { actionAuthTypes } from "./action"


export const initialState={
    isAuth:false,
    token:''
}

export const authReducer=(state=initialState , action)=>{
switch(action.type){
    case actionAuthTypes.SIGNIN_REQUEST:{
        return{
            ...state,
        }
    }
    case actionAuthTypes.SIGNIN_REQUEST:{
        return{
            ...state,
            isAuth:true,
            token:action.payload
        }
    }
    case actionAuthTypes.SIGNIN_FAILURE:{
        return{
            ...state,
        }
    }
    default:{
      return  state
    }
}
}