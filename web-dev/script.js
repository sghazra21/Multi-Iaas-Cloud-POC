// script.js
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for demo purpose

  // You can perform form validation and login process here
  
  // For demonstration, let's just log the credentials
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log('Username:', username);
  console.log('Password:', password);
  window.location.href = 'dashboard.html';
});
