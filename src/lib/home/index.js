export default () => {
  const container = document.createElement('div');

  const template = `
    <header id='homeheader'>
    <picture class="div-img">
    <img src="./img/logo1.png" alt="notebook" style="width:auto;">
 </picture>
    </header>
    <main>
      <select>
      </select>
      <textarea class='textarea' placeholder='Compartilhe conosco' rows='5' cols='70'></textarea>
      <button class='button theme'>Tema</button>
      <button class='button image'>Imagem</button>
      <button class='button post'>Publicar</button>
    
    </main>
    <footer id='homefooter'>
      <button class='button feed'>Feed</button>
      <button class='button filter'>Filtros</button>
      <button class='button profile'>Perfil</button>
    </footer>
    `;

  container.innerHTML = template;
  const btnSair = container.querySelector('.btn-sair');
  btnSair.addEventListener('click', () => {
    window.location.hash = '#login';
  });
  return container;
};
