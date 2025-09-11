import { useState } from 'react'
import './App.scss'
import Header from './components/header/header'

function App() {
  const [imperialUnit, setImperialUnit] = useState(false);
  const changeUnit = () => setImperialUnit(prev => !prev);

  return (
    <>
      <Header 
        changeUnit={changeUnit}
        imperialUnit={imperialUnit}
      />
      <main>
      </main>
    </>
  )
}

export default App
