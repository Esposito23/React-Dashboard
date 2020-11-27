
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminLayout from "layouts/Admin.jsx";
import FreeUser from 'layouts/FreeUser.jsx'
import Navigation from '../Navigation/Navigation';
import Signup from 'components/Signup/Signup'
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Route path="/admin/" render={props => <AdminLayout {...props} />} />
      <Route path="/free/" render={props => <FreeUser {...props} />} />
      <Route exact path='/signup'component={Signup} />
      <Route exact path='/'component={Navigation} />
    </div>
  </Router>
);

export default withAuthentication(App);
