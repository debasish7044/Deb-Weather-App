const weatherForm = document.querySelector('form');
let weatherDetails = document.querySelector('.message-1');
let locationDetails = document.querySelector('.message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const address = weatherForm.search.value;
  weatherForm.reset();
  weatherDetails.textContent = 'Loading..';
  locationDetails.textContent = '';

  fetch(`/weather?search=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherDetails.textContent = data.error;
      } else {
        weatherDetails.textContent = data.forecast;
        locationDetails.textContent = data.location;
      }
    });
  });
});
