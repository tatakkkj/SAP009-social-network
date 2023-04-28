import { newPost, accessPost } from '../firebase';

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
        <textarea class='textarea' placeholder='Compartilhe conosco' rows='5' cols='20'></textarea>
        <button class='button post' id='post' >Publicar</button>
      </section>
      <section class='feed__post-list'>
      </section>
    </main>
    <footer class='homefooter'>
      <button id='signout'>Sair</button>
      <img src='./lib/assets/home.png' alt='home' class='icons' />
      <img src='./lib/assets/profile.png' alt='perfil' class='icons' />
    </footer>
    `;

  container.innerHTML = template;

  const singout = container.querySelector('#signout');
  singout.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  function exibirPost(post) {
    const postList = `
      <section class='post__card' id='${post.id}'>
        <div class='post__card__info'
          <p id='post-username'>${post.username}</p>
          <p id='post-date'>${post.date}</p>
        </div>
        <div class='post__card__text'>
          <p id='post-text'>${post.post}</p>
        </div>
        <div class='post__card__buttons'>
          <button id='btn-like'>Curtir</button>
          <button id='btn-edit'>Editar</button>
          <button id='btn-delete'>Excluir</button>
        </div>
      </section>
    `;
    container.querySelector('.feed__post-list').innerHTML += postList;
  }

  function clearPost() {
    container.querySelector('.feed__post-list').innerHTML = '';
  }

  accessPost(exibirPost, clearPost);

  const textPost = container.querySelector('.textarea');
  const postButton = container.querySelector('#post');

  postButton.addEventListener('click', () => {
    if (textPost.value !== '') {
      newPost(textPost.value);
    } else {
      window.alert('Por favor, digite o que deseja compartilhar.');
    }
  });

  return container;
};
