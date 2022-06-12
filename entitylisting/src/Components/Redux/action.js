import axios from "axios"

export const actionTypes={
    GET_REQUEST:"GET_REQUEST",
    GET_SUCCESS:"GET_SUCCESS",
    GET_FAILURE:"GET_FAILURE",
    GET_SINGLE_PRODUCT_REQUEST:"GET_SINGLE_PRODUCT_REQUEST",
    GET_SINGLE_PRODUCT_SUCCESS:"GET_SINGLE_PRODUCT_SUCCESS",
    GET_SINGLE_PRODUCT_FAILURE:"GET_SINGLE_PRODUCT_FAILURE",
    ADD_CART_PRODUCT_REQUEST:"ADD_CART_PRODUCT_REQUEST",
    ADD_CART_PRODUCT_SUCCESS:"ADD_CART_PRODUCT_SUCCESS",
    ADD_CART_PRODUCT_FAILURE:"ADD_CART_PRODUCT_FAILURE",
    FETCH_CART_REQUEST:"FETCH_CART_REQUEST",
    FETCH_CART_SUCCESS:"FETCH_CART_SUCCESS",
    FETCH_CART_FAILURE:"FETCH_CART_FAILURE",
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

export const getData= (payload) => (dispatch, getState)=>{
const getRequestAction=getRequest();
dispatch(getRequestAction)
axios({
    url:'http://localhost:8080/product',
    method:"GET",
    params:{
    ...payload
    }
}).then((res)=>{
    const getSuccessAction=getSuccess(res.data);
    dispatch(getSuccessAction);
}).catch((err)=>{
    const getErrorAction=getFailure();
    dispatch(getErrorAction)
})
}

export const getSingleRequest=()=>{
    return{
        type:actionTypes.GET_SINGLE_PRODUCT_REQUEST
    }
}
export const getSingleSuccess=(data)=>{
    return{
        type:actionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload:data
    }
}

export const getSingleFailure=()=>{
    return{
        type:actionTypes.GET_SINGLE_PRODUCT_FAILURE
    }
}

export const getSingleData=(id)=>(dispatch)=>{
    dispatch(getSingleRequest());
    axios({
        url:`http://localhost:8080/product/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch(getSingleSuccess(res.data))
    })
    .catch((err)=>{
    dispatch(getSingleFailure())
    })
}

export const addCartRequest=()=>{
    return{
        type:actionTypes.ADD_CART_PRODUCT_REQUEST
    }
}
export const addCartSuccess=(data)=>{
    return{
        type:actionTypes.ADD_CART_PRODUCT_SUCCESS,
        payload:data
    }
}
export const addCartFailure=()=>{
    return{
        type:actionTypes.ADD_CART_PRODUCT_FAILURE
    }
}

export const addCartData=(data)=>(dispatch)=>{
    dispatch(addCartRequest());
    axios({
        url:"http://localhost:8080/carts",
        method:"POST",
        data
    }).then((res)=>{
        dispatch(addCartSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(addCartFailure())
    })
}


export const fetchCartRequest=()=>{
    return{
        type:actionTypes.FETCH_CART_REQUEST
    }
}
export const fetchCartSuccess=(data)=>{
    return{
        type:actionTypes.FETCH_CART_SUCCESS,
        payload:data
    }
}
export const fetchCartFailure=()=>{
    return{
        type:actionTypes.FETCH_CART_FAILURE
    }
}