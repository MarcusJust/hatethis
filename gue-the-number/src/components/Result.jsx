import { AppContext } from "../provider.jsx"
import { useContext } from 'react'
import styles from "./Result.module.css"

export const Results = () => {
    const [ globalmemo, dispatch ] = useContext(AppContext);
    const vyska = globalmemo.vyska
    const sirka = globalmemo.sirka
    const obvod = globalmemo.obvod
    const obsah = globalmemo.obsah
    return(
        <div className={styles.result}>
            <table className={styles.view}>
                <thead>
                    <tr>
                        <th>Šířka</th>
                        <th>Výška</th>
                        <th>Obvod</th>
                        <th>Obsah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{sirka}</th>
                        <th>{vyska}</th>
                        <th>{obvod}</th>
                        <th>{obsah}</th>
                    </tr>
                </tbody>
            </table>
            <div>
                <svg width={160} height={100} viewBox={`0 0 ${sirka} ${vyska}`}>
                    <rect x="0" y="0" width={sirka} height={vyska} className={styles.rect} />
                </svg>
            </div>
            <div>
                <button onClick={()=>{dispatch({type: "reset",})}}>Reset</button>
            </div>
        </div>
    );
}
export default Results