import { getUser, logOut, posts } from '../lib/lib/firebase.js';
import { divPosts, loadPosts } from '../utils/createPost.js';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  wallDiv.id = 'wallDiv';

  const btnLogOut = document.createElement('button');
  btnLogOut.textContent = 'Log out';

  btnLogOut.addEventListener('click', () => {
    logOut();
  });

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

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    const textUser = document.getElementById('post').value;
    const user = getUser().displayName;
    const text = (textUser === '')
      ? errorText.textContent = 'No has escrito nada aún'
      : posts(user, textUser)
        .then((result) => {
          document.getElementById('post').value = '';
        })
        .catch((error) => {
          console.log(error.message);
        });
    return text;
  });

  wallDiv.appendChild(btnLogOut);
  wallDiv.append(postBox);
  postBox.append(labelUser, labelDate, postUser, errorText, btnPublish, divPosts);

  return wallDiv;
};
