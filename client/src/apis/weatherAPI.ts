import axios from 'axios';

const BASE_URI =
  `https://api.openweathermap.org/data/2.5/weather?q=SEOUL&appid=${process.env.WEATHER_API_ID}&lang=kr&units=metric`;

const getWeather = async () => {
  try {
    const { data } = await axios.get(BASE_URI);
    if (data.weather[0].main === 'Clear') return 0;
    if (data.weather[0].main === 'Clouds') return 1;
    if (data.weather[0].main === 'Rain') return 2;
    if (data.weather[0].main === 'Snow') return 3;
    return 0;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default { getWeather };