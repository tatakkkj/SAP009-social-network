export default () => {
  const container = document.createElement('div');

  const template = `
    <h1>Petzone</h1>
    <h2>Dedicado a tutores e apoiadores da causa animal</h2>
    <form>
      <input type='email' class='input login' id='email' placeholder='seu@email.com' />
      <div id='email-error-message'></div>
      <input type='password' class='input senha' id='password' placeholder='senha' />
      <div id='password-error-message'></div>
      <button type='button' id='recover-password-button' disabled='true'>Recuperar senha</button>
      <button id='loginbutton' disabled='true'>Entrar</button>
      <button id='registerbutton'>Registrar</button>
    </form>
    `;

  container.innerHTML = template;

  return container;
};
