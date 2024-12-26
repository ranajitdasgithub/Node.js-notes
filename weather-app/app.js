const API_KEY = "33e940a36e0de180e584c62580f86e54";

async function getWeatherData(city) {
  let url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
  try {
    let data = await fetch(url);
    let weatherData = await data.json();
    console.log(weatherData);
  } catch (err) {
    console.log(err);
  }
}

getWeatherData("London"); // London is the city name
