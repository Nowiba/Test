document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple form validation
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Example of form submission (no real authentication here)
  console.log('Email:', email);
  console.log('Password:', password);

  // Normally, you'd send these values to a backend for verification
  alert('Login successful!');
});
