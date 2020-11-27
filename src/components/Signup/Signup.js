import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import './Signup.css'

const SignUpPage = () => (
  <div className='sfondo'>
    <div className='box'>
      <span className='text'>Biotecnomed<br /> <p>Registrazione</p>
      </span>
      <SignUpForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class SignUpFormBase extends Component {
  constructor(props) {
    super();
    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/admin/dashboard');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div class="input-container">

          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
          />
          <label> Username</label>
        </div>
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
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
          />
          <label> Password</label>
        </div>
        <div class="input-container">
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
          />
          <label>Confirm Password</label>
        </div>
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p className='link'>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p className='link'>
    Non sei registrato? <Link to='/signup' > Sign Up</Link>
  </p>
);


const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };


