import React, { useState } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserAuthWithEmailAndPassword,
} from '../../utils/firebase/Firebase.utils';

import Button from '../Button';
import FormInput from '../Form-input';

import './style.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await signInUserAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
        if(error.code ===  'auth/wrong-password' || error.code === 'auth/user-not-found') {
            alert('Invalid email or password')
        }
        console.log(error)
    }
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);
    console.log(response)
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Sudah punya akun?</h2>
      <span>Masuk dengan email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Masuk</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Masuk dengan Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
