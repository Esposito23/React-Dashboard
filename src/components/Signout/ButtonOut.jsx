import React from 'react';
import { withFirebase } from '../Firebase';
import {Link} from 'react-router-dom'

const SignOutButton = ({ firebase }) => (
  <Link to='/'>
  <button type="button" onClick={firebase.doSignOut} >
    Sign Out
  </button>
  </Link>
  
);
 
export default withFirebase(SignOutButton);




