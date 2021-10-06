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
  .signInWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
export const userPersistence = () => firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const logOut = () => firebase.auth()
  .signOut()
  .then(() => {
    onNavigate('/');
    console.log('Terminó sesión exitosamente');
  })
  .catch((error) => {
    console.log(error.message);
    alert('Lo sentimos. Ha ocurrido un error');
  });

export const auth = firebase.auth();

export const db = firebase.firestore();

export const getUser = () => firebase.auth().currentUser;

export const getPosts = () => db.collection('posts').get();

export const onGetPosts = (callback) => db.collection('posts').onSnapshot(callback);

export const deletePost = (id) => db.collection('posts').doc(id).delete();

export const getPost = (id) => db.collection('post').doc(id).get();

export const updatePost = (id, updatedPost) => db.collection('posts').doc(id).update(updatedPost);

export const posts = (username, date, time, post) => db.collection('posts').add({
  username,
  date,
  time,
  post,
});
