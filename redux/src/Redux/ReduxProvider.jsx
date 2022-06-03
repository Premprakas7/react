import React, { Children } from 'react'
import store from './store'

export const ReduxContext=React.createContext()

const ReduxProvider = ({children}) => {
  return (
    <div>
        <ReduxContext.Provider value={[store.getState.bind(store), store.dispatch.bind(store)]}>
            {children}
        </ReduxContext.Provider>
      
    </div>
  )
}

export default ReduxProvider
