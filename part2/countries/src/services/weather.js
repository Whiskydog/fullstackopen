import axios from 'axios';

const dataBaseUrl = 'https://api.openweathermap.org/data/2.5';

const getWeather = (city, countryCode) => {
  return axios
    .get('/weather', {
      baseURL: dataBaseUrl,
      params: {
        q: `${city},${countryCode}`,
        units: 'metric',
        appid: import.meta.env.VITE_OPEN_WEATHER_KEY,
      },
    })
    .then((response) => response.data);
};

export { getWeather };
