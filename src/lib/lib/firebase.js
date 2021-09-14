import { auth } from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const registerUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password);
};

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      onNavigate('/wall');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
