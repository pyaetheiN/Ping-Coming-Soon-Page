const form = document.querySelector('.form'),
      email = document.querySelector('.form__input'),
      errorMsg = document.querySelector('.form__input--error'),
      pattern = /^([a-zA-Z0-9.]){2,20}@{1}([a-z0-9-]){2,20}\.{1}([a-z0-9]){2,3}(\.([a-z0-9]){2,3})?$/;

// subdomain and domain ex. hello@newsletter.company.com

form.addEventListener('submit', (e) => {
  if(!email.value.match(pattern)){
    e.preventDefault();
    email.classList.add('error');
    errorMsg.style.display = 'block';
    errorMsg.innerText = 'Please provide a valid email address';
  }
  if(email.value === ''){
    e.preventDefault();
    email.classList.add('error');
    errorMsg.style.display = 'block';
    errorMsg.innerText = 'Whoops! It looks like you forgot to add your email'
  }
})