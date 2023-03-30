// Este es el punto de entrada de tu aplicacion
import home from './lib/home/index.js';
import login from './lib/login/index.js';
import register from './lib/register/index.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        main.appendChild(login());
        break;
      case '#home':
        main.appendChild(home());
        break;
      case '#register':
        main.appendChild(register());
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
