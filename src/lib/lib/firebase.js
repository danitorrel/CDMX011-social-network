import firebase from './secret.js';
import { onNavigate } from '../../main.js';

export const registerUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

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

export const loginUser = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    console.log(user.displayName);
    onNavigate('/wall');
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });

const db = firebase.firestore();
export const getUser = () => firebase.auth().currentUser;

export const posts = (username, post) => db.collection('posts').add({
  username,
  post,
});
