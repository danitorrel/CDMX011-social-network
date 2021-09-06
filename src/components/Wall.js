// import { onNavigate } from '../main.js';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  const labelWall = document.createElement('label');

  labelWall.textContent = 'Este es el muro';
  wallDiv.appendChild(labelWall);

  return wallDiv;
};
