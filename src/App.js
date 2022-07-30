import './App.css';
import BgImage from './components/BgImage';
import { useState } from 'react'

function App() {

  const [weather, setWeather] = useState({
    "data": [
      {
        "rh": 0,
        "pod": "--",
        "lon": 0,
        "pres": 0,
        "timezone": "--",
        "ob_time": "--",
        "country_code": "--",
        "clouds": 0,
        "ts": 0,
        "solar_rad": 0,
        "state_code": "--",
        "city_name": "--",
        "wind_spd": 0,
        "wind_cdir_full": "--",
        "wind_cdir": "N",
        "slp": 0,
        "vis": 0,
        "h_angle": 0,
        "sunset": "--",
        "dni": 0,
        "dewpt": 0,
        "snow": 0,
        "uv": 0,
        "precip": 0,
        "wind_dir": 0,
        "sunrise": "--",
        "ghi": 0,
        "dhi": 0,
        "aqi": 0,
        "lat": 0,
        "weather": {
          "icon": null,
          "code": 0,
          "description": "--"
        },
        "datetime": "--",
        "temp": 0,
        "station": "--",
        "elev_angle": 0,
        "app_temp": 0
      }
    ],
    "count": 0
  });

  const [date, setDate] = useState('Date')

  // function to get weather data from api  
  async function getData() {
    let city = document.getElementById('city');
    let country = document.getElementById('country');
    let cityText = city.value;
    let countryText = country.value;
    let url = `https://api.weatherbit.io/v2.0/current?city=${cityText}&country=${countryText}&key=caf88fc8129a4138a359cd71408b2f02`
    const response = await fetch(url);
    let weather = await response.json();
    if (weather.error == null) {
      console.log(weather);
      setWeather(weather);
      let d = new Date();
      let date = d.toLocaleString();
      setDate(date);
    } else {
      alert("Invalid City or Country supplied\nPlease give proper city and country name to get the desired output")
    }
  }

  return (
    <BgImage click={getData} weather={weather} date={date} />
  );
}

export default App;
