import React from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.utils';

import Button from '../Button';

import './style.scss';

const SignInWithGoogleContainer = () => {
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2>Dashboard Trans Metro Bandung</h2>
        <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default SignInWithGoogleContainer;
