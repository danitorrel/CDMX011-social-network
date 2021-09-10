// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  document.body.style.backgroundColor = '#ffffff';
  const Homediv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const labelLogin = document.createElement('label');
  labelLogin.classList.add('labelLogin');

  const username = document.createElement('input');
  username.placeholder = 'Email';

  const password = document.createElement('input');
  password.placeholder = 'Password';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.id = 'btnLogin';

  buttonHome.textContent = 'Regresar';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  Homediv.append(buttonHome, labelLogin, username, password, buttonLogin);

  return Homediv;
};
