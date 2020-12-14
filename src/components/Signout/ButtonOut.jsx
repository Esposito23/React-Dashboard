import React from 'react';
import { withFirebase } from '../Firebase';
import {Link} from 'react-router-dom'


const SignOutButton = ({ firebase }) => (
  <Link to='/' style={{color: '#9A9A9A', textDecoration: 'inherit' }}>
  <button type="button" onClick={firebase.doSignOut} 
  style={{border: 'none', background : 'white', paddingTop: "18px"}}>
    Sign Out
  </button>
  </Link>
  
);
 
export default withFirebase(SignOutButton);




