import {
  auth,
  newPost,
  accessPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
} from '../firebase';

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

  function exibirPost(post) {
    const postList = container.querySelector('.feed__post-list');
    const templatePost = `
      <section class='post__card' data-postcard='${post.id}' id='${post.id}'>
        <div class='post__card__info'
          <p id='post-username'>${post.username}</p>
          <p id='post-date'>${post.date}</p>
        </div>
        <div data-text='${post.id}' class='post__card__text'>
          <p data-posted='${post.id}' id='post-text'>${post.post}</p>
        </div>
        <div data-buttons='${post.id}' class='post__card__buttons'>
          <button data-like='${post.id}'id='btn-like'>Curtir</button>
          ${post.userId === auth.currentUser.uid ? `
          <button data-edit='${post.id}' id='edit'>Editar</button>
          <button data-delete='${post.id}' id='delete'>Excluir</button>
          ` : ''}

          </div>
      </section>
    `;

    postList.innerHTML += templatePost;

    const deleteButton = container.querySelectorAll('[data-delete]');
    deleteButton.forEach((element) => {
      element.addEventListener('click', (event) => {
        if (window.confirm('Tem certeza que deseja deletar essa publicação?')) {
          const postCard = container.querySelector(['data-postcard']);
          deletePost(event.target.dataset.delete);
          if (postCard === event.target.dataset.delete) {
            postCard.remove();
          }
        }
      });
    });

    const editButton = container.querySelectorAll('[data-edit]');
    editButton.forEach((element) => {
      element.addEventListener('click', (event) => {
        const divButtons = container.querySelector(`[data-buttons='${event.target.dataset.edit}']`);
        const divText = container.querySelector(`[data-text='${event.target.dataset.edit}']`);

        divText.innerHTML = `
        <textarea data-posted='${event.target.dataset.edit}' id='posted'></textarea>
        `;
        divButtons.innerHTML = `
        <button data-save='${event.target.dataset.edit}' id='save'>Salvar</button>
        <button data-cancel='${event.target.dataset.edit}'id='cancel'>Cancelar</button>
        `;
        const postedText = container.querySelector(`[data-posted='${event.target.dataset.edit}']`);
        const saveButton = container.querySelector('[data-save]');
        const cancelButton = container.querySelector('#cancel');

        saveButton.addEventListener('click', () => {
          editPost(event.target.dataset.edit, postedText.value);
        });
      });
    });

    const likeButton = container.querySelectorAll('[data-like]');
    likeButton.forEach((element) => {
      element.addEventListener('click', (event) => {
        if (post.likes.includes(auth.currentUser.uid)) {
          dislikePost(event.target.dataset.like, auth.currentUser.uid);
          post.likes.splice(post.likes.indexOf(auth.currentUser.uid));
          likeButton.innerHTML = `<button data-like='${event.target.dataset.like}'id='btn-like' class='numero-curtidas'>${post.likes.length}</button>`;
        } else {
          likePost(event.target.dataset.like, auth.currentUser.uid);
          post.likes.push(auth.currentUser.uid);
          likeButton.innerHTML = `<button data-like='${event.target.dataset.like}'id='btn-like' class='numero-curtidas'>${post.likes.length}</button>`;
        }
      });
    });
  }

  function clearPost() {
    container.querySelector('.feed__post-list').innerHTML = '';
  }

  accessPost(exibirPost, clearPost);

  const postButton = container.querySelector('#post');
  const textPost = container.querySelector('.textarea');
  postButton.addEventListener('click', () => {
    if (textPost.value !== '') {
      newPost(textPost.value);
      textPost.value = '';
    } else {
      window.alert('Por favor, digite o que deseja compartilhar.');
    }
  });

  const singout = container.querySelector('#signout');
  singout.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return container;
};
