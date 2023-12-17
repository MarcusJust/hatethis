import { createContext, useReducer } from "react";

const initData = {
    vyska: 0,
    sirka: 0,
    obvod: 0,
    obsah: 0,


}

const reducer = (state, action) => {
    if (action.type === "pocitej") 
    {   const [newVyska, newSirka] = action.payload
        const newState = JSON.parse(JSON.stringify(state))
        newState.vyska = newVyska
        newState.sirka = newSirka
        newState.obvod = 2*(Number(newSirka) +Number(newVyska))
        newState.obsah = newSirka * newVyska
        return newState
    } else if(action.type === "reset"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.sirka = 0
        newState.vyska = 0
        newState.obvod = 0
        newState.obsah = 0
        return newState
    }
    throw Error('Unknown action.');
}

export const AppContext = createContext(initData)

export const AppProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initData);
  
    return (
      <AppContext.Provider value={[store, dispatch]}>
        {children}
      </AppContext.Provider>
    );
  };