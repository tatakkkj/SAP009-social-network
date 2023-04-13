export default () => {
  const container = document.createElement('div');
  container.id = 'container__feed';

  const template = `
    <header class='homeheader'>
      <img src='./lib/assets/pata-de-cachorro.png' alt='logo' class='icons' />
      <img src='./lib/assets/menu.png' alt='menu' class='icons' />
      
    </header>
    <main class='feed'>
      <section class='feed__new-post'>
        <select class='feed__select'>
          <option selected>Selecione a cidade:</option>
          <option value="acre">Acre</option>
          <option value="alagoas">Alagoas</option>
          <option value="amapá">Amapá</option>
          <option value="amazonas">Amazonas</option>
          <option value="bahia">Bahia</option>
          <option value="ceará">Ceará</option>
          <option value="espírito santo">Espírito Santo</option>
          <option value="goiás">Goiás</option>
          <option value="maranhão">Maranhão</option>
          <option value="mato grosso">Mato Grosso</option>
          <option value="mato grosso do sul">Mato Grosso do Sul</option>
          <option value="minas gerais">Minas Gerais</option>
          <option value="pará">Pará/option>
          <option value="paraíba">Paraíba</option>
          <option value="pernambuco">Pernambuco</option>
          <option value="piaui">Piauí</option>
          <option value="rio de janeiro">Rio de Janeiro</option>
          <option value="rio grande do norte">Rio Grande do Norte</option>
          <option value="rio grande do sul">Rio Grande do Sul</option>
          <option value="rondônia">Rondônia</option>
          <option value="roraima">Roraima</option>
          <option value="santa catarina">Santa Catarina</option>
          <option value="são paulo">São Paulo</option>
          <option value="sergipe">Sergipe</option>
          <option value="tocantins">Tocantins</option>
          <option value="distrito federal">Distrito Federal</option>
        </select>
        <textarea class='textarea' placeholder='Compartilhe conosco' rows='5' cols='20'></textarea>
        <div class='feed__buttons'>
          <button class='button theme'>Tema</button>
          <button class='button image' input type='file' accept="image/png, image/jpeg">Imagem</button>
          <button class='button post'>Publicar</button>
        </div>
      </section>
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
