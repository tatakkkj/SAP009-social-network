import { signUp } from '../firebase.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container__signup';

  const template = `
  <div class='container__signup__info'>
    <h1 class='container__signup__info__title'>Petzone</h1>
    <h2 class='container__signup__info__subtitle'>Registre-se</h2> 
  </div>
  <form class='container__singup__form'>
    <input type='text' class='container__singup__form__input' id='name' placeholder='Nome' />
    <input type='text' class='container__singup__form__input' id='surname' placeholder='Sobrenome' />
    <input type='text' class='container__singup__form__input' id='username' placeholder='Usuário' />
    <input type='email' class='container__signup__form__input' id='email' placeholder='Email' />
    <input type='password' class='container__signup__form__input' id='password' placeholder='Senha' />
    <button class='container__signup__form__button' id='signupbutton'>Registrar</button>
    <button class='container__signup__form__button' id='backtologin'>Voltar</button>
  </form>
  `;

  container.innerHTML = template;

  const singUpButton = container.querySelector('#signupbutton');
  singUpButton.addEventListner('click', () => {
    const email = container.querySelector('#email');
    const password = container.querySelector('#password');
    const name = container.querySelector('#name');
    const surname = container.querySelector('#surname');
    const username = container.querySelector('#username');

    if (username.value === '' || name.value === '' || surname.value === '' || email.value === '' || password.value === '') {
      alert('Por favor, preencha todos os campos');
    } else {
      signUp(email.value, password.value, name.value, surname.value, username.value)
        .then(() => {
          window.location.hash = '#login';
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  });

  const returnLogin = container.querySelector('#backtologin');
  returnLogin.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return container;
};
