import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/Firebase.utils';

import { setCurrentUser } from './store/action';

import './App.scss';

import Page from './routes/Page';
import Authentication from './routes/Authentication';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/*" element={<Page />} />
      <Route path='/admin/*' element={<Authentication />} />
    </Routes>
  );
}

export default App;
