import React from 'react';

import SignInWithGoogleContainer from '../../components/signInWithGoogle';

import './style.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInWithGoogleContainer />
    </div>
  );
};

export default Authentication;
