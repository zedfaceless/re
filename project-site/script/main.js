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
    name: "Torque Masters Auto Repair",
    address: "789 Gear Road, Makati City, Philippines",
    phone: "+63 912 765 4321",
    website: "https://www.torquemastersautorepair.com",
    image: "images/Torque.webp",
    successStory: "Successfully repaired a 2018 Toyota Corolla's transmission, saving the owner over $1,500 in dealership costs."
  },
  {
    name: "Rev Up Automotive Services",
    address: "321 Spark Street, Davao City, Philippines",
    phone: "+63 923 876 5432",
    website: "https://www.revupautomotiveservices.com",
    image: "images/Rev.webp",
    successStory: "Rescued a 2015 Honda Civic from engine failure through expert diagnostics and a complete engine rebuild, restoring it to like-new condition."
  },
  {
    name: "Precision Brake & Tire",
    address: "555 Brake Lane, Quezon City, Philippines",
    phone: "+63 934 567 8901",
    website: "https://www.precisionbrakeandtire.com",
    image: "images/Precision.webp",
    successStory: "Helped a local delivery service extend their fleet's lifespan by 3 years through comprehensive brake and tire maintenance."
  },
  {
    name: "EcoDrive Hybrid Specialists",
    address: "123 Green Energy Ave, Cebu City, Philippines",
    phone: "+63 945 678 9012",
    website: "https://www.ecodrivehybrids.com",
    image: "images/EcoDrive.webp",
    successStory: "Restored a 2016 Toyota Prius's hybrid battery, resulting in a 30% increase in fuel efficiency for the owner."
  }
];

// Filter and display silver or gold members randomly
const qualifiedMembers = members;
const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 4);

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

// Function to create modal for text and image display
// Function to create modal for text and image display
function createModal(text, imageSrc) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '1000';

  const modalContent = document.createElement('div');
  modalContent.style.position = 'relative';
  modalContent.style.maxWidth = '80%';
  modalContent.style.textAlign = 'center';
  modalContent.style.backgroundColor = 'white'; // Optional: Background color for the content
  modalContent.style.borderRadius = '8px'; // Optional: Rounded corners
  modalContent.style.padding = '20px'; // Added padding

  const modalText = document.createElement('p');
  modalText.style.color = 'black'; // Change text color for contrast
  modalText.style.fontSize = '1.5em';
  modalText.textContent = text;

  const modalImage = document.createElement('img');
  modalImage.src = imageSrc;
  modalImage.style.width = '100%'; // Full width for modal image
  modalImage.style.maxWidth = '400px'; // Max width of modal image
  modalImage.style.borderRadius = '8px';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = 'red';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.padding = '10px';
  closeButton.style.cursor = 'pointer';
  
  closeButton.onclick = () => {
    document.body.removeChild(modal);
  };

  modalContent.appendChild(closeButton); // Close button is added first
  modalContent.appendChild(modalText);
  modalContent.appendChild(modalImage);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

// Add event listeners for each inspiration item
document.querySelectorAll('.inspiration-item').forEach(item => {
  const text = item.querySelector('.inspiration-text').textContent;
  const imageSrc = item.querySelector('.inspiration-image').src;

  item.addEventListener('click', () => {
    createModal(text, imageSrc);
  });
});
