import axios from "axios"

export const actionAuthTypes={

    SIGNIN_REQUEST:"SIGNIN_REQUEST",
    SIGNIN_SUCCESS:"SIGNIN_SUCCESS",
    SIGNIN_FAILURE:"SIGNIN_FAILURE"
}

export const signInRequest=()=>{
 return{
    type:actionAuthTypes.SIGNIN_REQUEST,
 }
}

export const signInSuccess=(token)=>{
    return{
       type:actionAuthTypes.SIGNIN_SUCCESS,
       payload:token
    }
 }

 export const signInFailure=()=>{
    return{
       type:actionAuthTypes.SIGNIN_FAILURE,
    }
 }

export const signIn=(payload)=>(dispatch)=>{
dispatch(signInRequest());
axios({
    url:"https://reqres.in/api/login",
    method:"POST",
    payload
}).then((res)=>{
    dispatch(signInSuccess(res.data))
}).catch((err)=>{
    dispatch(signInFailure())
})
}