// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const Home = () => {
  const Homediv = document.createElement('div');
  const logoPDP = document.createElement('img');
  const labelWelcome = document.createElement('label');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const labelOr = document.createElement('label');
  const buttonGoogle = document.createElement('button');
  const h1 =document.createElement('h1');

  logoPDP.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo-Imagen-TV-MX.png');
  labelWelcome.textContent = 'Bienvenid@';
  buttonRegister.textContent = 'Regístrate';
  buttonLogin.textContent = 'Iniciar Sesión';
  labelOr.textContent = 'o';
  buttonGoogle.textContent = 'Continuar con Google';
  h1.textContent = 'ya es viernes vamonos';

  h1.classList.add('viernes');

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  Homediv.appendChild(logoPDP);
  Homediv.appendChild(labelWelcome);
  Homediv.appendChild(h1);
  Homediv.appendChild(buttonRegister);
  Homediv.appendChild(buttonLogin);
  Homediv.appendChild(labelOr);
  Homediv.appendChild(buttonGoogle);

  return Homediv;
};