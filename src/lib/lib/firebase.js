import { auth } from './secret.js';

export const registerUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log('error', error.message);
    // ..
    });
};
