// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { auth } from '../lib/lib/secret.js';

export const Home = () => {
  const Homediv = document.createElement('div');
  // const logoPDP = document.createElement('img');
  const labelWelcome = document.createElement('label');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const labelOr = document.createElement('label');
  const buttonGoogle = document.createElement('button');

  // logoPDP.setAttribute('src', '');
  labelWelcome.textContent = 'Bienvenid@';
  buttonRegister.textContent = 'Regístrate';
  buttonLogin.textContent = 'Iniciar Sesión';
  labelOr.textContent = 'o';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'btnGoogle';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // Access with Google
  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        console.log('enter with google');
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Homediv.appendChild(logoPDP);
  Homediv.appendChild(labelWelcome);
  Homediv.appendChild(buttonRegister);
  Homediv.appendChild(buttonLogin);
  Homediv.appendChild(labelOr);
  Homediv.appendChild(buttonGoogle);

  return Homediv;
};
