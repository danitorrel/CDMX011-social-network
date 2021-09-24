import { updatePosts } from '../lib/lib/firebase.js';

export const divPosts = document.createElement('div');

export const loadPosts = async () => {
  updatePosts((querySnapshot) => {
    divPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const contentPost = doc.data();
      const postUsername = document.createElement('h3');
      postUsername.classList.add('postUn');
      postUsername.textContent = contentPost.username;

      const areaPost = document.createElement('p');
      areaPost.classList.add('areaPost');
      areaPost.textContent = contentPost.post;

      divPosts.append(postUsername, areaPost);
    });
  });
};
