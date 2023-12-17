import { useContext, useRef } from 'react'
import { AppContext } from "../provider.jsx"

export const Values = () => {
    const [store, dispatch] = useContext(AppContext);
    const vyskaRef = useRef(null)
    const sirkaRef = useRef(null)
    return(
        <form>
            <label>Vyska</label>
            <input type="number" ref={vyskaRef}></input>
            <label>Sirka</label>
            <input type="number" ref={sirkaRef}></input>
            <button onClick={()=>{
            dispatch({
                type: "pocitej",
                payload: [vyskaRef.current.value, sirkaRef.current.value]
            })}}>Pocitej</button>
        </form>
    )
}
export default Values