import { useContext} from 'react'
import Results from './components/Result.jsx';
import Values from './components/Values.jsx';

import './App.css'
import { AppContext } from "./provider.jsx"

function App() {
  const [globalmemo, ] = useContext(AppContext);

  return (
    <>
    {globalmemo.obsah === 0 && <Values/>}
    {globalmemo.obsah > 0 && <Results/>}
    </>
  )
}

export default App
