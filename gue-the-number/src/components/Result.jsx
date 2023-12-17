import { AppContext } from "../provider.jsx"
import { useContext } from 'react'
import styles from "./Result.module.css"

export const Results = () => {
    const [store, dispatch] = useContext(AppContext);
    const vyska = store.vyska;
    const sirka = store.sirka;
    const obvod = store.obvod;
    const obsah = store.obsah;
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