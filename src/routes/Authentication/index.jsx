import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthenticationAdmin from './admin';

import './style.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Routes>
        <Route path='/auth' element={<AuthenticationAdmin />}/>
      </Routes>
    </div>
  );
};

export default Authentication;
