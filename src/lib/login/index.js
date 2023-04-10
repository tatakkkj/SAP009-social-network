export default () => {
  const container = document.createElement('div');
  const template = `
    <section class='box-text-img'>
    <div class='box-01'>
    <h1 class="logo-geral logo1">PetZone</h1>
    <div class="paragrafo">
    <p>A PetZone é uma rede social dedicada a você, tutor e apoiador das causas animais.</p>
    <p><strong>Já está cadastrado? Faça o login!</strong></p>
    </div> 
    <div class='img-register'>
    <img src='./img/logo2.png' alt='logo2' width="auto" height="auto">
    </div>
    </div>
    <section class='box-register'>
    <form class='section-register'>
      <h2 class='subtitle-register'>LOGIN</h2>
      <input type='text' placeholder='Usuário:' id='name'>
      <input type='password' placeholder='Senha:' id='password'> 
      <div class="form-group">
      <button type="submit" class="btn-feed">LOGIN</button>
      <p class='text-box-register'>Acesse com o Google<p>
      <div class='logo-google'>
      <img src="./img/googlelogo.png" alt="logo-google" width="auto" height="auto">
      </div>
      <hr>
      <p class='text-box-register'>Ainda não tem conta?<p>
      <button type="submit" class="btn-cadastro">CADASTRE-SE</button>
      </div>
    </form> 
    </section>
    </section>  
    `;

  container.innerHTML = template;
  const btnLogin = container.querySelector('.btn-feed');
  btnLogin.addEventListener('click', () => {
    window.location.hash = '#feed';
  });
  return container;
};
