import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Preview from './components/preview/preview';
import PreviewGallery from './components/previewgallery/previewgallery';
import sunny from "../public/images/icon-sunny.webp";
import cloudly from "../public/images/icon-partly-cloudy.webp";
import overcast from "../public/images/icon-overcast.webp";
import fog from "../public/images/icon-fog.webp";
import drizzle from "../public/images/icon-drizzle.webp";
import rain from "../public/images/icon-rain.webp";
import snow from "../public/images/icon-snow.webp";
import storm from "../public/images/icon-storm.webp";
import Daily from './components/daily/daily';
import Hourly from './components/hourly/hourly';

function App() {
  const [weather, setWeather] = useState(null)
  const [imperialUnit, setImperialUnit] = useState(false);
  const [search, setSearch] = useState("Paris");
  const [location, setLocation] = useState(null)
  const changeUnit = () => setImperialUnit(prev => !prev);
  const city = search;
  function getWeatherIcon(weathercode) {
    if (weathercode === 0) return sunny;
    if ([1, 2].includes(weathercode)) return cloudly;
    if (weathercode === 3) return overcast;
    if ([45, 48].includes(weathercode)) return fog;
    if ([51, 53, 55, 56, 57].includes(weathercode)) return drizzle;
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weathercode)) return rain;
    if ([71, 73, 75, 77, 85, 86].includes(weathercode)) return snow;
    if ([95, 96, 99].includes(weathercode)) return storm;
    return cloudly; // fallback
  }

  useEffect(() => {
    if (!search) return; 
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const { latitude, longitude, name, country } = data.results[0];
          setLocation({city: name, country});
          const params = new URLSearchParams({
            latitude,
            longitude,
            current_weather: "true",
            hourly: "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weathercode",
            timezone: "Europe/Paris",
            daily: "temperature_2m_max,temperature_2m_min,weathercode"
          });
          const apiUrl = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
          fetch(apiUrl)
            .then(res => res.json())
            .then(data => setWeather(data));
        } else {
          console.log("Ville introuvable");
        }
      });
  }, [city, search]);

useEffect(() => {
  console.log(weather);
})

  return (
    <>
      <Header 
        changeUnit={changeUnit}
        imperialUnit={imperialUnit}
      />
      <main>
        <Intro 
          setSearch={setSearch}
        />
        <Preview 
          town={location?.city || ""}
          country={location?.country || ""}
          meteoImage={getWeatherIcon(weather?.current_weather?.weathercode || [])}
          meteoAlt="weather"
          temperature={Math.floor(weather?.hourly.temperature_2m?.[0] || 0)}
        />
        <PreviewGallery 
          tempFeel={Math.floor(weather?.hourly.temperature_2m?.[0] || 0)}
          precipitation={weather?.hourly.precipitation?.[0] || 0}
          wind={Math.floor(weather?.hourly.wind_speed_10m?.[0] || 0)}
          humidity={weather?.hourly.relative_humidity_2m?.[0] || 0}
        />
        <Daily 
          week={weather?.daily || {}}
          tempMax={weather?.daily?.temperature_2m_max || []}
          tempMin={weather?.daily?.temperature_2m_min || []}
          imageCard={getWeatherIcon(weather?.daily?.weathercode || [])}
          weatherCodes={weather?.daily?.weathercode || []}
          getWeatherIcon={getWeatherIcon}
        />
        <Hourly />
      </main>
    </>
  )
}

export default App
