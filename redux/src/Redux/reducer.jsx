
import React from 'react'
import { appActions } from './action'

export const reducer = (state, action) => {
  switch (action.type){
      case appActions.INCREMENT_COUNTER:
      return{
          ...state,
          count: state.count+1
      };
      case appActions.DECREMENT_COUNTER:
      return {
          ...state,
          count: state.count-1
      }
      default:
          return state;
  }
}

