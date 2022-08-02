import React from 'react';

import CardList from '..';
import SignInWithGoogleContainer from '../../../../signInWithGoogle';

const UserSignIn = () => {
  return (
    <CardList
      className="card-list--container"
      title={'Pengisian Ulasan'}
    >
     <SignInWithGoogleContainer />
    </CardList>
  );
};

export default UserSignIn;
