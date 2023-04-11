import { signUp } from '../firebase.js';

export default () => {
  const container = document.createElement('div');
  container.id = 'container__signup';

  const template = `
    <section class='box-text-img'>
    <div class='box-01'>
        <h1 class="logo-geral logo-register">PetZone</h1>
      <div class='img-register'>
        <img src='./img/logo2.png' alt='img-cadastro' class='img-cadastro'>
      </div>
    </div>
    <section class='box-register'> 
    <form class='section-register'>
      <h2 class='subtitle-register'>CADASTRAR</h2>
      <input type='text' placeholder='Nome Completo:' id='name'>
      <input type='text' placeholder='Nome de Usuário:' id='name-user'>
      <input type='email' placeholder='E-mail:' id='e-mail'>
      <input type='password' placeholder='Senha:' id='password'> 
      <hr>
      <p class='text-box-register'>Acesse com o Google<p>
      <div class='logo-google'>
      <img class='google-img' src='./img/googlelogo.png' alt='logo-google'>
      </div>
      <button class='btn-cadastro' id='cadastro type='button>CADASTRE-SE</button>
    </form>
    </section>
    </section>
    `;
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
