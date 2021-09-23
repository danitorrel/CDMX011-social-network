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

  const btnPublish = document.createElement('button');
  btnPublish.id = 'btnPublish';
  btnPublish.textContent = 'Publicar';

  window.onload = loadPosts();

  btnPublish.addEventListener('click', async (e) => {
    e.preventDefault();
    const textUser = document.getElementById('post').value;
    const user = getUser().displayName;
    await posts(user, textUser)
      .then((result) => {
        document.getElementById('post').value = '';
        loadPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  wallDiv.appendChild(btnLogOut);
  wallDiv.append(postBox);
  postBox.append(labelUser, labelDate, postUser, btnPublish, divPosts);

  return wallDiv;
};
