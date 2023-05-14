const API_KEY = "587f406eaa0d80708dc2e96c4473faa2";

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const searchInput = document.getElementById("search-box");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", async () => {
    const city = searchInput.value;
    const weatherData = await fetchWeather(city);

    // Display the city name
    document.getElementById("city-name").innerHTML = `<h2>${weatherData.name}</h2>`;

    // Display the wind speed
    document.getElementById("wind-speed").innerHTML = `<p>Wind speed: ${weatherData.wind.speed} mph</p>`;

    // Display the humidity
    document.getElementById("humidity").innerHTML = `<p>Humidity: ${weatherData.main.humidity}%</p>`;

    // Display the current temperature
    const celsius = (weatherData.main.temp - 273.15);
    document.getElementById("current-temperature").innerHTML = `<p>Current temperature: ${celsius}°C</p>`;
  });
};

main();