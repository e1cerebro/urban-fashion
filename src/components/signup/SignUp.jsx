import React from 'react';
import './SignUp.scss';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      console.log('passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2>I don not have an account</h2>
        <span>Sign up with your email/password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='displayName'
            name='displayName'
            onChange={this.handleChange}
            value={displayName}
            required
          />{' '}
          <FormInput
            type='email'
            label='email'
            name='email'
            onChange={this.handleChange}
            value={email}
            required
          />{' '}
          <FormInput
            type='password'
            label='password'
            name='password'
            onChange={this.handleChange}
            value={password}
            required
          />{' '}
          <FormInput
            type='password'
            label='confirmPassword'
            name='confirmPassword'
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />{' '}
          <Button type='submit'>Sign up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
