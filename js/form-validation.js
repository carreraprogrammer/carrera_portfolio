const form = document.querySelector('form');
const email = document.getElementById('email');
const error = email.nextElementSibling;

const emailSearch = /[A-Z]/g;

email.addEventListener('input', () => {
  const isInvalid = emailSearch.test(email.value);

  if (isInvalid) {
    email.classList.add('invalid');
  } else {
    error.textContent = '';
    error.className = 'error';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isInvalid = emailSearch.test(email.value);
  if (isInvalid) {
    email.classList.add('invalid');
    error.textContent = `Please, enter a lowercase email. Try with: '${email.value.toLowerCase()}'`;
    error.className = 'error active';
  } else {
    email.classList.toggle('valid');
    error.textContent = '';
    error.className = 'error';
  }
});