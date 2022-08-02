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
    <div className="sign-in-page-user">
      <div className="sign-in-container-user">
        <h2>Anda Belum Masuk</h2>
        <p>Pastikan masuk terlebih dahulu sebelum menulis ulasan. Terimakasih.</p>
        <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default SignInWithGoogleContainer;
