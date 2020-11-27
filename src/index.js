import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";

import "./assets/css/pe-icon-7-stroke.css";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import Firebase, { FirebaseContext } from './components/Firebase';



ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
      <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

