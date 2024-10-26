const apiKey = 'e269d26025c33befe2d34e3539a41960'; // Replace with your actual API key
const city = 'Manila,PH'; // Use Manila, Philippines

// Fetch current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Weather data could not be retrieved.');
    }
    return response.json();
  })
  .then(data => {
    const currentTemp = Math.round(data.main.temp);
    const weatherDescription = data.weather.map(event =>
      event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    ).join(', ');

    document.getElementById('current-weather').textContent = `${currentTemp}°C, ${weatherDescription}`;

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Forecast data could not be retrieved.');
    }
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < 3; i++) {
      const forecast = data.list[i * 8]; // Approx 24-hour intervals
      const forecastTemp = Math.round(forecast.main.temp);
      const forecastDescription = forecast.weather.map(event =>
        event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      ).join(', ');

      document.getElementById('forecast').innerHTML += `<li>Day ${i + 1}: ${forecastTemp}°C, ${forecastDescription}</li>`;
    }
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('current-weather').textContent = 'Unable to load weather data';
  });
