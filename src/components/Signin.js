import { registerUser } from '../lib/lib/firebase.js';
import { ErrorValidate } from '../utils/ErrorValidate.js';

export const Signin = () => {
  const container = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonSend = document.createElement('button');
  const alerta = document.createElement('div');

  buttonSend.innerText = 'crear';

  buttonSend.addEventListener('click', () => {
    registerUser(inputEmail.value, inputPass.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('llegamos', user);
      })
      .catch((error) => {
        alerta.innerText = ErrorValidate(error.code);
      });
  });

  container.appendChild(inputEmail);
  container.appendChild(inputPass);
  container.appendChild(buttonSend);
  container.appendChild(alerta);
  return container;
};
