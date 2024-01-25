// JavaScript for Submit Button Click
document.querySelector('.submit-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Retrieve form values
  const fullName = document.getElementById('fullName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const pujaService = document.getElementById('pujaService').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const message = document.getElementById('message').value;
  
  // Display form values in the console
  console.log('Full Name:', fullName);
  console.log('Phone Number:', phoneNumber);
  console.log('Puja Service:', pujaService);
  console.log('City:', city);
  console.log('State:', state);
  console.log('Message:', message);
});

// JavaScript for Book Now Button Click
document.querySelector('.book-now-button').addEventListener('click', function() {
  alert('Book Now button clicked!');
});
