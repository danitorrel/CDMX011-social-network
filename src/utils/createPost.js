import { updatePosts, deletePost } from '../lib/lib/firebase.js';

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

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btnDelete');
      btnDelete.textContent = 'eliminar';
      btnDelete.dataset.id = contentPost.id;

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
      btnMsgCancel.textContent = 'Cancelar';

      divPosts.append(divPost);
      divPost.append(postUsername, areaPost, btnDelete, modalContainer);
      modalContainer.appendChild(modal);
      modal.append(msgDelete, btnMsgDelete, btnMsgCancel);
      /*     const btnsDelete = divPosts.querySelectorAll('.btnDelete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log(e.target.dataset.id);
      });
    }); */
      const btnsDelete = divPosts.querySelectorAll('.btnDelete');
      const prueba = divPosts.querySelector('.modalContainer');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          prueba.style.display = 'block';
          const pruebados = () => deletePost(e.target.dataset.id);
          prueba.addEventListener('click', (event) => {
            console.log(event.target);
            if (event.target.classList.contains('btnMsgDelete')) {
              console.log('soy el boton eliminar');
              pruebados();
              prueba.style.display = 'none';
            } else { console.log('aaaaaaa'); }
          });
        });
      });
    });
	    });
};
