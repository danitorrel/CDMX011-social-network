import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const registerUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      onNavigate('/wall');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
