
export const appActions={
    INCREMENT_COUNTER:"INCREMENT_COUNTER",
    DECREMENT_COUNTER:"DECREMENT_COUNTER"
}

export const incrementCountAction =(count)=>{
    return{
        type :appActions.INCREMENT_COUNTER,
        payload: count
    
    }
}