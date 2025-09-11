import { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/header/header'

function App() {
  const [ temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [ windUnit, setWindUnit] = useState("meter");
  const [ precipitationUnit, setPrecipitationUnit] = useState("meter");

  useEffect(()=>{
    console.log(temperatureUnit + windUnit + precipitationUnit);
  }, [temperatureUnit, windUnit, precipitationUnit])

  return (
    <>
      <Header 
        changeTemperature={setTemperatureUnit}
        changeWind={setWindUnit}
        changePrecipitation={setPrecipitationUnit}
      />
    </>
  )
}

export default App
