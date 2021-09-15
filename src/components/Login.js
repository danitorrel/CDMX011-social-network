// eslint-disable-next-line import/no-cycle
import { loginUser } from '../lib/lib/firebase.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  document.body.style.backgroundColor = '#ffffff';
  const Homediv = document.createElement('div');
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonBack');

  const labelLogin = document.createElement('label');
  labelLogin.textContent = 'Inicia sesión';
  labelLogin.classList.add('labelLogin');

  const subLabel = document.createElement('label');
  subLabel.textContent = 'Inicia la aventura';
  subLabel.classList.add('subLabel');

  const divFormLogin = document.createElement('div');
  divFormLogin.classList.add('divLogin');

  const username = document.createElement('input');
  username.placeholder = 'Correo electrónico';
  username.id = 'emailLogin';

  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.placeholder = 'Contraseña';
  password.id = 'passLogin';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.id = 'buttonLogin';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'btnGoogle';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameLogin = Homediv.querySelector('#emailLogin').value;
    const passwordLogin = Homediv.querySelector('#passLogin').value;
    loginUser(usernameLogin, passwordLogin);
  });

  Homediv.append(buttonHome, labelLogin, subLabel, divFormLogin);
  divFormLogin.append(username, password, buttonLogin, buttonGoogle);

  return Homediv;
};
