// Handle sign up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in local storage (simulating registration)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert('Signup successful!');
    window.location.href = 'login.html'; // Redirect to login page after successful signup
});

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage on successful login
    } else {
        alert('Invalid credentials');
    }
});
// Display user profile
window.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        document.getElementById('username-display').textContent = user.username;
        document.getElementById('email-display').textContent = user.email;
    } else {
        alert('Please log in first.');
        window.location.href = 'login.html'; // Redirect to login if no user is found
    }
});

// Logout functionality
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html'; // Redirect to login page after logout
}
// Example of sending a POST request for user login
const loginUser = (username, password) => {
    const credentials = {
      username: username,
      password: password
    };
  
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials) // Send the credentials as JSON
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          // Successfully logged in, store the JWT token
          localStorage.setItem('token', data.token);
          // Redirect or update the UI
        } else {
          // Handle login failure
          alert('Invalid credentials');
        }
      })
      .catch(error => console.error('Error logging in:', error));
  };
  