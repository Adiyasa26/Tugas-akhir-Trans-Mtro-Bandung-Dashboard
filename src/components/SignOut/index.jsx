import React from 'react';

import Button from '../Button';
import { signOutUser } from '../../utils/firebase/Firebase.utils';

import './style.css';

import SignOutLogo from '../../icon/Sign_out_squre_light.svg';

function Keluar(props) {
  return (
    <div className={props.className}>
      <h1>Hi, Admin</h1>
      <Button type="button" buttonType="signout" onClick={signOutUser}>
        <img src={SignOutLogo} alt="sign out logo" />
        <h2>Keluar</h2>
      </Button>
    </div>
  );
}

export default Keluar;
