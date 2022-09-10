const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

const emailSearch = /[A-Z]/g;

email.addEventListener('input', () => {
  const isInvalid = emailSearch.test(email.value);

  if (isInvalid) {
    email.classList.add('invalid');
  } else {
    error.classList.remove('invalid');
    error.textContent = '';
    error.className = 'error';
  }
});

form.addEventListener('submit', (event) => {
  const isInvalid = emailSearch.test(email.value);
  if (isInvalid) {
    email.classList.add('invalid');
    error.textContent = `Please, enter a lowercase email. Try with: '${email.value.toLowerCase()}'`;
    error.className = 'error active';
    event.preventDefault();
  } else {
    email.classList.remove('invalid');
    error.textContent = '';
    error.className = 'error';
  }
});