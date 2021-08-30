// Este es el punto de entrada de tu aplicacion
import { home } from './views/home.js';
import { signup } from './views/signup.js';
import { login } from './views/login.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/signup': signup,
  '/login': login,
};