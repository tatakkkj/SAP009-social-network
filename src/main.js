// Este es el punto de entrada de tu aplicacion
import login from './lib/login/index.js';
import feed from './lib/feed/index.js';
import register from './lib/register/index.js';

const main = document.querySelector('#root');

const verifyHash = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      main.appendChild(login());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#register':
      main.appendChild(register());
      break;
    default:
      main.appendChild(login());
      break;
  }
};

const init = () => {
  window.addEventListener('hashchange', () => {
    verifyHash();
  });
};
window.addEventListener('load', () => {
  verifyHash();
  init();
});
