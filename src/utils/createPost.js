import { updatePosts, deletePost, getUser } from '../lib/lib/firebase.js';

export const divPosts = document.createElement('div');

export const loadPosts = async () => {
  updatePosts((querySnapshot) => {
    divPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const contentPost = doc.data();
      contentPost.id = doc.id;

      const divPost = document.createElement('div');
      divPost.classList.add('divPost');

      const postUsername = document.createElement('h3');
      postUsername.classList.add('postUn');
      postUsername.textContent = contentPost.username;

      const areaPost = document.createElement('p');
      areaPost.classList.add('areaPost');
      areaPost.textContent = contentPost.post;

      const editArea = document.createElement('textarea');
      editArea.classList.add('editArea');
      editArea.style.display = 'none';
      editArea.textContent = contentPost.post;

      const divBtns = document.createElement('div');
      divBtns.classList.add('divBtns');

      const like = document.createElement('button');
      like.textContent = 'like';

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btnDelete');
      btnDelete.textContent = 'eliminar';
      btnDelete.dataset.id = contentPost.id;

      const btnEdit = document.createElement('button');
      btnEdit.classList.add('btnEdit');
      btnEdit.textContent = 'Editar';
      btnEdit.dataset.id = contentPost.id;

      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modalContainer');
      modalContainer.style.display = 'none';

      const modal = document.createElement('div');
      modal.classList.add('modal');

      const msgDelete = document.createElement('p');
      msgDelete.classList.add('msgDelete');
      msgDelete.textContent = '¿Estás seguro de querer borrar este post?';

      const btnMsgDelete = document.createElement('button');
      btnMsgDelete.classList.add('btnMsgDelete');
      btnMsgDelete.textContent = 'Eliminar';
      btnMsgDelete.dataset.id = contentPost.id;

      const btnMsgCancel = document.createElement('button');
      btnMsgCancel.classList.add('btnMsgCancel');
      btnMsgCancel.textContent = 'Cancelar';

      divPosts.append(divPost);
      divPost.append(postUsername, areaPost, editArea, divBtns, modalContainer);
      divBtns.append(like, btnDelete, btnEdit);
      modalContainer.appendChild(modal);
      modal.append(msgDelete, btnMsgDelete, btnMsgCancel);

      const btnsDelete = divPost.querySelectorAll('.btnDelete');
      const modalDisplay = divPost.querySelector('.modalContainer');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          modalDisplay.style.display = 'block';
          modalDisplay.addEventListener('click', (event) => {
            const deleteConfirm = () => deletePost(e.target.dataset.id);
            if (event.target.classList.contains('btnMsgDelete')) {
              console.log('No nos hacemos responsables por cosas que después no vas a poder recuperar');
              deleteConfirm();
              modalDisplay.style.display = 'none';
            } else if (event.target.classList.contains('btnMsgCancel')) {
              modalDisplay.style.display = 'none';
            }
          });
        });
      });

      const btnsEdit = divPost.querySelectorAll('.btnEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log(e.target.dataset.id);
          editArea.style.display = 'block';
        });
      });

      if (contentPost.username !== getUser().displayName) {
        btnDelete.style.display = 'none';
        btnEdit.style.display = 'none';
      }
    });
  });
};
