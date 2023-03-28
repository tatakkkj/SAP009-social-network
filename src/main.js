// Este es el punto de entrada de tu aplicacion

import home from './lib/home/index.js';
import login from './lib/login/index.js';
import register from './lib/register/index.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        main.appendChild(login());
        break;
      case '#home':
        main.appendChild(home());
        break;
      case '#register':
        main.appendChild(register());
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(home());
  init();
});

const form = {
  email: () => document.querySelector('#email'),
  password: () => document.querySelector('#password'),
  recoverPassword: () => document.querySelector('#recover-password-button'),
  loginButton: () => document.querySelector('#loginbutton'),
};

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function toggleEmailErrors() {
  const email = form.email().value;
  const showError = document.querySelector('#email-error-message');
  if (!email) {
    showError.innerHTML = 'Email é obrigatório';
  } else {
    showError.innerHTML = '';
  }

  if (validateEmail(email)) {
    showError.innerHTML = '';
  } else {
    showError.innerHTML = 'Digite um email válido';
  }
}

function togglePasswordErrors() {
  const password = form.password().value;
  const showError = document.querySelector('#password-error-message');
  if (!password) {
    showError.innerHTML = 'Senha é obrigatória';
  } else {
    showError.innerHTML = '';
  }
}

function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function loginFirebase() {
  firebase.auth().singInWithEmailAndPassoword(
    form.email().value, form.password().value
  ).then(response => {
    console.log('entrou')
  }).catch(error => {
    console.log('nao entrou')
  })
};

form.email().onchange = onChangeEmail();
form.password().onchange = onChangePassword();
form.loginButton().addEventListener('click', loginFirebase);
