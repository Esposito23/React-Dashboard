import React from 'react';
import Signin from '../Signin/Signin'
import SignOutButton from '../Signout/ButtonOut'
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Signin />
  </div>

);

export default Navigation;