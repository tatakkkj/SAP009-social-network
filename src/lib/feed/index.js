export default () => {
  const container = document.createElement('div');

  const template = `
    <header id='homeheader'>
      <h2>Petzone</h2>
      <button class='signout'>Sair</button>
    </header>
    <main>
      <select>
      </select>
      <textarea class='textarea' placeholder='Compartilhe conosco' rows='5' cols='20'></textarea>
      <button class='button theme'>Tema</button>
      <button class='button image'>Imagem</button>
      <button class='button post'>Publicar</button>
    
    </main>
    <footer id='homefooter'>
      <button class='button home'>Home</button>
      <button class='button filter'>Filtros</button>
      <button class='button profile'>Perfil</button>
    </footer>
    `;

  container.innerHTML = template;

  const singout = container.querySelector('.singout');
  singout.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return container;
};
