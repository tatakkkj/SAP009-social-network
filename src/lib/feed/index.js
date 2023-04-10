export default () => {
  const container = document.createElement('div');
  const template = `
  <header class="header">
      <h1 class= "logo1">PetZone</h1>
      <button class="btn-sair">Sair</button>
  </header>
  <main>
    <div class="container-img-feed"> 
       <picture class="div-img">
          <img src="./img/logo1.png" alt="logo1" width="500" height="600">
       </picture>
      <section class="feed-posts">
          <div class="feed">
              <textarea name="" id="txt-area" cols="70" rows="5">Compartilhe Conosco</textarea>
              <div class="botoes">
              <button class="btn-tema">Tema</button>
              <button class="btn-imagem">Imagem</button>
                 <button class="btn-compartilhar">Compartilhar</button>                
              </div>
          </div>
  
      </section>
      </div>
  </main>
  
    `;

  container.innerHTML = template;
  const btnSair = container.querySelector('.btn-sair');
  btnSair.addEventListener('click', () => {
    window.location.hash = '#login';
  });
  return container;
};
