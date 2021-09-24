import { updatePosts, deletePost } from '../lib/lib/firebase.js';

export const divPosts = document.createElement('div');

export const loadPosts = async () => {
  updatePosts((querySnapshot) => {
    divPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const contentPost = doc.data();
      contentPost.id = doc.id;

      const divPost = document.createElement('div');

      const postUsername = document.createElement('h3');
      postUsername.classList.add('postUn');
      postUsername.textContent = contentPost.username;

      const areaPost = document.createElement('p');
      areaPost.classList.add('areaPost');
      areaPost.textContent = contentPost.post;

      const btnDelete = document.createElement('button');
      btnDelete.textContent = 'eliminar';
      btnDelete.classList.add('btnDelete');
      btnDelete.dataset.id = contentPost.id;

      const btnsDelete = divPosts.querySelectorAll('.btnDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
          const modalContainer = document.createElement('div');
          modalContainer.classList.add('modalContainer');

          const modal = document.createElement('div');
          modal.classList.add('modal');

          const msgDelete = document.createElement('p');
          msgDelete.classList.add('msgDelete');
          msgDelete.textContent = '¿Estás seguro de querer borrar este post?';

          const btnMsgDelete = document.createElement('button');
          btnMsgDelete.classList.add('btnMsgDelete');
          btnMsgDelete.textContent = 'Eliminar';

          btnMsgDelete.addEventListener('click', async (e) => {
            try {
              await deletePost(contentPost.id);
              modalContainer.classList.remove('modalContainer');
            } catch (error) {
              alert('Ha ocurrido un error. Intenta más tarde');
            }
          });

          divPosts.appendChild(modalContainer);
          modalContainer.appendChild(modal);
          modal.append(msgDelete, btnMsgDelete);
        });
      });

      divPosts.appendChild(divPost);
      divPost.append(postUsername, areaPost, btnDelete);
    });
  });
};
