import { useEffect, useState } from 'react';
import { getWeather } from '../services/weather';

const Languages = ({ langs }) => {
  return (
    <div>
      <h4>languages:</h4>
      <ul>
        {langs.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const Weather = ({ weather }) => {
  if (!weather) return null;

  const icon = weather.weather[0].icon;
  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <div>temperature {weather.main.temp} Celsius</div>
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  );
};

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const capital = country.capital[0];
  const countryCode = country.cca2;

  useEffect(() => {
    getWeather(capital, countryCode).then((data) => setWeather(data));
  }, [capital, countryCode]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {capital}</div>
      <div>area {country.area}</div>
      <Languages langs={Object.entries(country.languages)} />
      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather weather={weather} />
    </div>
  );
};

export default Country;
