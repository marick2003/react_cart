// /src/pages.js

import React from 'react';
import WelcomeDialog from './component/welcomeDialog';
import Logins from './page/login';

/**
 * These are root pages
 */
const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books <WelcomeDialog></WelcomeDialog></h1>;
};

const Electronics = () => {
  return <h1 className="py-3">Electronics</h1>;
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

const Video=()=>{

  return ;
}

const Login=()=>{

  return  <Logins></Logins>;
}

export { Home, Books, Electronics, Mobile, Desktop, Laptop,Video,Login };