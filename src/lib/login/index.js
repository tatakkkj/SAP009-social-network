import { signIn } from '../firebase.js';

export default () => {
  const container = document.createElement('main');
  container.id = 'container__login';

  const template = `
    <div class='container__login__info'>
      <h1 class='container__login__info__title'>Petzone</h1>
      <h2 class='container__login__info__subtitle'>Dedicado a tutores e apoiadores da causa animal</h2> 
    </div>
    <form class='container__login__form'>
      <input type='email' class='input login' id='email' placeholder='seu@email.com' />
      <div id='email-error-message'></div>
      <input type='password' class='input senha' id='password' placeholder='senha' />
      <div id='password-error-message'></div>
      <button type='button' id='recover-password-button'>Recuperar senha</button>
      <button type='button' id='loginbutton'>Entrar</button>
      <button type='button' id='registerbutton'>Registrar</button>
    </form>
  
    `;

  container.innerHTML = template;

  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  const recoverPassword = container.querySelector('#recover-password-button');
  const loginButton = container.querySelector('#loginbutton');

  function login(e) {
    e.preventDefault();
    return signIn(email.value, password.value);
  }

  loginButton.addEventListener('click', login);


  // function validateEmail(email) {
  // return /\S+@\S+\.\S+/.test(email);
  // }

  // function isEmailValid() {
  // const email = form.email().value;
  // if (!email) {
  // return false;
  // }
  // return validateEmail(email);
  // }

  // function isPasswordValid() {
  // const password = form.password().value;
  // if (!password) {
  //     return false;
  //   }
  //   return true;
  // }

  // function toggleButtonsDisable() {
  //   const emailValid = isEmailValid();
  //   form.recoverPassword().disabled = !emailValid;

  //   const passwordValid = isPasswordValid();
  //   form.loginButton().disabled = !emailValid || !passwordValid;
  // }

  // function toggleEmailErrors() {
  //   const email = form.email().value;
  //   const showError = document.querySelector('#email-error-message');
  //   if (!email) {
  //     showError.innerHTML = 'Email é obrigatório';
  //   } else {
  //     showError.innerHTML = '';
  //   }

  //   if (validateEmail(email)) {
  //     showError.innerHTML = '';
  //   } else {
  //     showError.innerHTML = 'Digite um email válido';
  //   }
  // }

  // function togglePasswordErrors() {
  //   const password = form.password().value;
  //   const showError = document.querySelector('#password-error-message');
  //   if (!password) {
  //     showError.innerHTML = 'Senha é obrigatória';
  //   } else {
  //     showError.innerHTML = '';
  //   }
  // }

  // function onChangeEmail() {
  //   toggleButtonsDisable();
  //   toggleEmailErrors();
  // }

  // function onChangePassword() {
  //   toggleButtonsDisable();
  //   togglePasswordErrors();
  // }

  
    // firebase.auth().singInWithEmailAndPassoword(
    //   form.email().value, form.password().value
    // ).then(response => {
    //   console.log('entrou')
    // }).catch(error => {
    //   console.log('nao entrou')
    // })
  
  // form.email().onchange = onChangeEmail();
  // form.password().onchange = onChangePassword();

  
 


  return container;
};
