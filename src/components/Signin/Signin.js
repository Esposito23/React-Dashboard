import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../Signup/Signup';
import { withFirebase } from '../Firebase';
import './Signin.css'



const SignInPage = () => (
  <div className='sfondo'>
    <div className='box'>
      <span className='text'>Biotecnomed<br /> <p>Login</p>
      </span>
      <SignInForm />
      <SignUpLink className='link' />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super();

    this.state = { ...INITIAL_STATE };

  }


  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/admin/dashboard');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div class="input-container">

          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
          />
          <label> Email</label>
        </div>
        <div class="input-container">
          <input 
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
          />
        <label> Password</label>
        </div>

        <button className='btn' disabled={isInvalid} type="submit" >
          LogIn
        </button>

        {error && <p>{error.message}</p>}
      </form>

    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };

