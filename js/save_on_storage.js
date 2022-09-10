function saveData() {
  const name = document.getElementByClass('form-name').value;
  const email = document.getElementByClass('form-email').value;
  const message = document.getElementByClass('form-message').value;
  
  const data = {
   name,
   email,
   message,
  };
  localStorage.setItem('carreraPorfolioData', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
    if (localStorage.getItem('carreraPorfolioData') !== null) {
      const data = JSON.parse(localStorage.getItem('carreraPorfolioData'));
      document.getElementById('form-name').value = data.customerName;
      document.getElementById('form-email').value = data.customerEmail;
      document.getElementById('form-message').value = data.customerMessage;
    }
  }
  
  loadDataFromLocalStorage();