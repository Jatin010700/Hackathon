const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === '') {
    alert('Please enter your email');
    return;
  }
  if (password === '') {
    alert('Please enter your password');
    return;
  }

  window.location.href = 'next-page.html';
});