import { loginUser, userPersistence } from '../lib/lib/firebase.js';
import { onNavigate } from '../main.js';
import { ErrorValidate } from '../utils/ErrorValidate.js';

export const Login = () => {
  document.body.style.backgroundColor = '#ffffff';
  const Homediv = document.createElement('div');
  Homediv.classList.add('homediv');

  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonBack');

  const imgPin = document.createElement('img');
  imgPin.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/img-pin-blur.png?alt=media&token=0d881422-8e25-4f68-aa97-60a6061bcf44');
  imgPin.classList.add('imgPin');

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

  const eyeOff = document.createElement('img');
  eyeOff.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/outline_visibility_off_black_24dp.png?alt=media&token=981cfa55-bea9-47cb-a710-c27509e22066');
  eyeOff.id = 'eyeOffLogin';
  eyeOff.style.display = 'block';

  const eyeOn = document.createElement('img');
  eyeOn.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/outline_visibility_black_24dp.png?alt=media&token=655a1895-dbf3-4495-a2f5-7b1f1bf977b1');
  eyeOn.id = 'eyeOnLogin';
  eyeOn.style.display = 'none';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.id = 'buttonLogin';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'btnGoogle';

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/pata-de-perro-3a9dd.appspot.com/o/logoGoogle.png?alt=media&token=558171fa-a3a2-485d-8ee0-14a5493ec4d3');
  imgGoogle.classList.add('imgGoogleLog');

  const labelErr = document.createElement('label');
  labelErr.classList.add('labelErr');

  buttonHome.addEventListener('click', () => onNavigate('/'));

  eyeOff.addEventListener('click', () => {
    const passwordValue = Homediv.querySelector('#passLogin');
    if (passwordValue.type === 'password') {
      passwordValue.type = 'text';
      eyeOff.style.display = 'none';
      eyeOn.style.display = 'block';
    }
  });

  eyeOn.addEventListener('click', () => {
    const passwordValue = Homediv.querySelector('#passLogin');
    if (passwordValue.type === 'text') {
      eyeOff.style.display = 'block';
      eyeOn.style.display = 'none';
    }
  });

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogin = Homediv.querySelector('#emailLogin').value;
    const passwordLogin = Homediv.querySelector('#passLogin').value;
    userPersistence()
      .then((() => loginUser(emailLogin, passwordLogin)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          onNavigate('/wall');
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          labelErr.innerText = ErrorValidate(error.code);
        })
        .catch((error) => {
          console.log('Persistance failed');
        })));
  });

  Homediv.append(buttonHome, imgPin, labelLogin, subLabel, divFormLogin);
  divFormLogin.append(username, password, eyeOff, eyeOn,
    buttonLogin, buttonGoogle, imgGoogle, labelErr);

  return Homediv;
};
