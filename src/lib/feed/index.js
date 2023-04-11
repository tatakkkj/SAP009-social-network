export default () => {
  const container = document.createElement('div');

  const template = `
    <header class='homeheader'>
      <img src='./lib/assets/pata-de-cachorro.png' alt='logo' class='icons' />
      <img src='./lib/assets/menu.png' alt='menu' class='icons' />
      
    </header>
    <main class='feed'>
      <select class='feed__select'>
        <option value='selected'>Selecione a cidade:</option>
      </select>
      <textarea class='textarea' placeholder='Compartilhe conosco' rows='5' cols='20'></textarea>
      <div class='feed__buttons'>
        <button class='button theme'>Tema</button>
        <button class='button image'>Imagem</button>
        <button class='button post'>Publicar</button>
      </div>
    </main>
    <footer class='homefooter'>
    <button id='signout'>Sair</button>
      <img src='./lib/assets/home.png' alt='home' class='icons' />
      <img src='./lib/assets/filter.png' alt='filtro' class='icons' />
      <img src='./lib/assets/profile.png' alt='perfil' class='icons' />
    </footer>
    `;

  container.innerHTML = template;

  const singout = container.querySelector('#signout');
  singout.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return container;
};
