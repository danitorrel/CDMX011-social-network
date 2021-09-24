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

      divPosts.appendChild(divPost);
      divPost.append(postUsername, areaPost, btnDelete);
    });
    const btnsDelete = divPosts.querySelectorAll('.btnDelete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        await deletePost(e.target.dataset.id);
      });
    });
  });
};
