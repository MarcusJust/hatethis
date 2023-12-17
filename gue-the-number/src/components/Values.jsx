import { useContext, useRef } from 'react'
import { AppContext } from "../provider.jsx"

export const Values = () => {
    const [dispatch] = useContext(AppContext);
    const vyskaRef = useRef(null)
    const sirkaRef = useRef(null)
    return(
        <form>
            <label>Vyska</label>
            <input type="number" ref={vyskaRef}></input>
            <label>Sirka</label>
            <input type="number" ref={sirkaRef}></input>
            <button onClick={()=>
        {
            dispatch({
                type: "pocitej",
                payload: [vyskaRef.current, sirkaRef.current]
            })
        }}>Pocitej</button>
        </form>
    )
}
export default Values