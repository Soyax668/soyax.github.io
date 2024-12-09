const validUsername = 'user123';
const validPassword = 'password123';

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');


loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (username === validUsername && password === validPassword) {
    
    window.location.href = 'Aboutus.html';  // 
  } else {
    errorMessage.textContent = 'Invalid username or password. Please try again.';
    errorMessage.style.color = 'red';
  }
});
