const API_KEY = "587f406eaa0d80708dc2e96c4473faa2";

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const city = "Adelaide";
  const weatherData = await fetchWeather(city);

  console.log(weatherData);
}

main();