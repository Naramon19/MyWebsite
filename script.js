const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

let registeredUsers = {};

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('Registration successful! Redirecting to login...'); 
    wrapper.classList.remove('active'); 

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

 
  registeredUsers = { username, email, password };
  alert('Registration successful! Redirecting to login...');
 
  wrapper.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  if (email === registeredUsers.email && password === registeredUsers.password) {
    alert(`Welcome, ${registeredUsers.username}! Redirecting to the dashboard...`);
    
    window.location.href = "menu.html"; 
  } else {
    alert('Invalid email or password. Please try again.');
  }
});


