// Fetch weather data using OpenWeatherMap API
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

// Members data
const members = [
  {
    name: "Luzviminda Electronics",
    address: "123 Rizal Avenue, Manila, Philippines",
    phone: "+63 912 345 6789",
    website: "https://www.luzvimindaelectronics.com",
    image: "image/Electronics.webp",
    level: "gold"
  },
  {
    name: "Bayanihan Textiles",
    address: "456 Mabini Street, Cebu City, Philippines",
    phone: "+63 923 456 7890",
    website: "https://www.bayanihantextiles.com",
    image: "image/Textile.webp",
    level: "silver"
  },
  {
    name: "Maharlika Foods",
    address: "789 Quezon Boulevard, Davao City, Philippines",
    phone: "+63 934 567 8901",
    website: "https://www.maharlikafoods.com",
    image: "image/Food.webp",
    level: "bronze"
  }
];

// Filter and display silver or gold members randomly
const qualifiedMembers = members.filter(member => ['silver', 'gold'].includes(member.level));
const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

const spotlightContainer = document.getElementById('spotlight-container');
shuffledMembers.forEach(member => {
  spotlightContainer.innerHTML += `
    <div class="spotlight-member">
      <img src="${member.image}" alt="${member.name}" style="width: 100px; height: 100px;">
      <h3>${member.name}</h3>
      <p>Phone: ${member.phone}</p>
      <p>Address: ${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.level}</p>
    </div>`;
});

// Update year and last modified date
document.addEventListener("DOMContentLoaded", function() {
  const now = new Date();
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
    timestampInput.value = now.toISOString(); // Set the value to ISO format
  }

  document.getElementById('year').textContent = now.getFullYear();
  // Check if last modified date exists, else provide fallback date
  const lastModifiedDate = document.lastModified ? new Date(document.lastModified).toLocaleDateString() : 'N/A';
  document.getElementById('last-modified').textContent = lastModifiedDate;
});
