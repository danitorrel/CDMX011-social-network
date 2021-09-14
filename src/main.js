// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Signin } from './components/Signin.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

import { Wall } from './components/Wall.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Signin,
  '/login': Login,
  '/wall': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const components = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(components());
