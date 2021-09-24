import { getUser, logOut, posts } from '../lib/lib/firebase.js';
import { divPosts, loadPosts } from '../utils/createPost.js';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  wallDiv.id = 'wallDiv';

  const btnLogOut = document.createElement('button');
  btnLogOut.textContent = 'Log out';

  const postBox = document.createElement('div');
  postBox.id = 'postBox';

  const labelUser = document.createElement('label');
  labelUser.textContent = 'Usuario';

  const labelDate = document.createElement('label');
  labelDate.textContent = 'Fecha';

  const postUser = document.createElement('textarea');
  postUser.id = 'post';
  postUser.placeholder = 'Escribe tus consejos aqui';

  const errorText = document.createElement('label');
  errorText.classList.add('errorTextLabel');

  const btnPublish = document.createElement('button');
  btnPublish.id = 'btnPublish';
  btnPublish.textContent = 'Publicar';

  window.onload = loadPosts();

  btnLogOut.addEventListener('click', () => {
    logOut();
  });

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    const textUser = wallDiv.querySelector('#post').value;
    const user = getUser().displayName;
    const newPost = (textUser === '')
      ? errorText.textContent = 'No has escrito nada aún'
      : posts(user, textUser)
        .then((result) => {
          wallDiv.querySelector('#post').value = '';
          errorText.textContent = '';
        })
        .catch((error) => {
          console.log(error.message);
        });
    return newPost;
  });

  wallDiv.appendChild(btnLogOut);
  wallDiv.appendChild(postBox);
  postBox.append(labelUser, labelDate, postUser, errorText, btnPublish, divPosts);

  return wallDiv;
};
