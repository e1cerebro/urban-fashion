import React, { Component } from 'react';
import './signin.scss';
import FormInput from '../../components/form-input/FormInput';
import Button from '../button/Button';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label='email'
          />

          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
            label='password'
          />
          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
