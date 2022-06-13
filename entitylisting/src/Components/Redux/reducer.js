import { actionTypes } from "./action";

export const initData={
    data:[],
    currentProduct:{},
    carts:[],
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
    case actionTypes.GET_SINGLE_PRODUCT_REQUEST:{
        return{
           ...state,
           loading:true
        } 
    }
    case actionTypes.GET_SINGLE_PRODUCT_SUCCESS:{
        return{
            ...state,
        data:action.payload,
        currentProduct:action.payload,
        loading:false
        } 
    }
    case actionTypes.GET_SINGLE_PRODUCT_FAILURE:{
        return{
            ...state,
            error:true,
            loading:false
        } 
    }
    case actionTypes.ADD_CART_PRODUCT_REQUEST:{
        return{
           ...state,
           loading:true
        } 
    }
    case actionTypes.ADD_CART_PRODUCT_SUCCESS:{
        return{
            ...state,
        carts:[...state.carts, action.payload],
        loading:false
        } 
    }
    case actionTypes.ADD_CART_PRODUCT_FAILURE:{
        return{
            ...state,
            error:true,
            loading:false
        } 
    }
    case actionTypes.FETCH_CART_REQUEST:{
        return{
           ...state,
           loading:true
        } 
    }
    case actionTypes.FETCH_CART_SUCCESS:{
        return{
            ...state,
        carts:[action.payload],
        loading:false
        } 
    }
    case actionTypes.FETCH_CART_FAILURE:{
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
