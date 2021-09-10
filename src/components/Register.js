// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { registerUser } from '../lib/lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { authGoogle } from '../lib/lib/firebase.js';

export const Register = () => {
  const Homediv = document.createElement('div');

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar';

  const labelRegister = document.createElement('label');
  labelRegister.textContent = 'Regístrate';
  labelRegister.id = 'labelRegister';

  const labelSubtitle = document.createElement('label');
  labelSubtitle.textContent = 'Inicia la aventura';
  labelSubtitle.id = 'labelSub';

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.placeholder = 'Nombre de usuario';
  inputUsername.id = 'inputUsername';
  inputUsername.required = true;

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.id = 'inputEmail';
  inputEmail.required = true;

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.placeholder = 'Contraseña';
  inputPassword.id = 'inputPassword';
  inputPassword.required = true;

  const eyeOff = document.createElement('img');
  eyeOff.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/outline_visibility_off_black_24dp.png?alt=media&token=981cfa55-bea9-47cb-a710-c27509e22066');
  eyeOff.id = 'eyeOff';

  const eyeOn = document.createElement('img');
  eyeOn.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/outline_visibility_black_24dp.png?alt=media&token=655a1895-dbf3-4495-a2f5-7b1f1bf977b1');
  eyeOn.id = 'eyeOn';

  const inputPasswordConfirm = document.createElement('input');
  inputPasswordConfirm.setAttribute('type', 'password');
  inputPasswordConfirm.placeholder = 'Confirmación';
  inputPasswordConfirm.id = 'inputConfirm';
  inputPasswordConfirm.required = true;

  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('type', 'submit');
  buttonRegister.id = 'buttonRegister';
  buttonRegister.textContent = 'Regístrate';

  const buttonGoogleRegister = document.createElement('button');
  buttonGoogleRegister.textContent = 'Registrarse con Google';
  buttonGoogleRegister.id = 'btnGoogleRegister';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  eyeOff.addEventListener('click', () => {
    const passwordValue = Homediv.querySelector('#inputPassword');
		const icon = document.getElementsById('eyeOff');
    if (passwordValue.type === 'password') {
      passwordValue.type = 'text';
      eyeOff.classList.remove('eyeOff');
      eyeOn.classList.add('eyeOn');
    } else {
      passwordValue.type = 'password';
      eyeOn.classList.remove('eyeOn');
      eyeOff.classList.add('eyeOff');
    }
  });

  buttonGoogleRegister.addEventListener('click', () => {
    authGoogle(onNavigate);
  });

  buttonRegister.addEventListener('click', (e) => {
    const emailRegister = Homediv.querySelector('#inputEmail').value;
    const passwordRegister = Homediv.querySelector('#inputPassword').value;
    e.preventDefault();
    registerUser(emailRegister, passwordRegister);
    console.log(registerUser);
    onNavigate('/login');
  });

  Homediv.appendChild(buttonHome);
  Homediv.appendChild(labelRegister);
  Homediv.appendChild(labelSubtitle);
  Homediv.appendChild(inputUsername);
  Homediv.appendChild(inputEmail);
  Homediv.appendChild(inputPassword);
	Homediv.appendChild(eyeOn);
  Homediv.appendChild(eyeOff);
  Homediv.appendChild(inputPasswordConfirm);
  Homediv.appendChild(buttonRegister);
  Homediv.appendChild(buttonGoogleRegister);

  return Homediv;
};
