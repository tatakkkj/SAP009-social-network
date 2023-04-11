import { signIn } from '../firebase';

export default () => {
  const container = document.createElement('div');
  const template = `
    <div class='container__login__info'>
      <img src='./lib/assets/logo1.png' alt='logo' />
      <p class='container__login__info__subtitle'>Dedicado a tutores e apoiadores da causa animal</p> 
      <p class='container__login__info__subtitle'>Já está cadastrado? Faça seu cadastro!</p>
    </div>
    <form class='container__login__form'>
      <input type='email' class='container__login__form__input' id='email' placeholder='Email:' />
      <div id='email-error-message'></div>
      <input type='password' class='container__login__form__input' id='password' placeholder='Senha:' />
      <div id='password-error-message'></div>
      <button type='button' class='container__login__form__button' id='loginbutton'>Entrar</button>
      <button type='button' class='container__login__form__button' id='logingoogle'>Acesse com o Google</button>
      <img src='./lib/assets/googlelogo.png' alt='Logo Google' />
      <button type='button' class='container__login__form__button' id='registerbutton'>Registrar</button>
    </form>
  
    `;

  container.innerHTML = template;

  const email = container.querySelector('#email');
  const password = container.querySelector('#password');

  const loginButton = container.querySelector('#loginbutton');
  loginButton.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  const registerButton = container.querySelector('#registerbutton');
  registerButton.addEventListener('click', () => {
    window.location.hash = '#register';
  });

  function login(e) {
    e.preventDefault();

    const usuario = signIn(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return [errorCode, errorMessage];
      });
    console.log(usuario);
  }

  loginButton.addEventListener('click', login);

  return container;
};
