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
import NotFound from './routes/Page/404';
import Home from './routes/Page/Home'

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
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/trans-metro-bandung/*" element={<Page />} />
      <Route path='/admin/*' element={<Authentication />} />
    </Routes>
  );
}

export default App;
