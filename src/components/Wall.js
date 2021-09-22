import { getUser, posts } from '../lib/lib/firebase';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  const labelWall = document.createElement('label');
  labelWall.textContent = 'Este es el muro';
  wallDiv.id = wallDiv;

  const postBox = document.createElement('div');
  postBox.id = postBox;

  const labelUser = document.createElement('label');
  labelUser.textContent = 'Usuario';

  const labelDate = document.createElement('label');
  labelDate.textContent = 'Fecha';

  const post = document.createElement('textarea');
  post.id = post;
  post.placeholder = 'Escribe tus consejos aqui';

  const btnPublish = document.createElement('button');
  btnPublish.id = btnPublish;
  btnPublish.textContent = 'Publicar';

  btnPublish.addEventListener('click', async (e) => {
    e.preventDefault();
    const textUser = document.querySelector('#post').value;
    const user = getUser().displayName;
    await posts(user, textUser);

    console.log(textUser);
    console.log(e);
  });

  wallDiv.appendChild(labelWall);
  wallDiv.append(postBox);
  postBox.append(labelUser, labelDate, post, btnPublish);

  return wallDiv;
};
