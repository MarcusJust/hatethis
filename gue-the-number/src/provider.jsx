import { createContext, useReducer } from "react";

const initData = {
    vyska: 6,
    sirka: 3,
    obvod: 0,
    obsah: 3,


}

const reducer = (state, action) => {
    if (action.type === "pocitej") 
    {   const [newVyska, newSirka] = action.payload
        const newState = JSON.parse(JSON.stringify(state))
        newState.vyska = newVyska
        newState.sirka = newSirka
        newState.obvod = 2*(newSirka+newVyska)
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

export const AppProvider = ({children}) => {
    const store = useReducer(reducer, initData)

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
} 