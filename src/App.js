import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/Firebase.utils';

import { setCurrentUser } from './store/action';

import './App.scss';

import Page from './routes/Page';
import Authentication from './routes/Authentication';

function App() {
  const currentUser = useSelector(state => state.currentUser);

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
      <Route
        index
        element={
          currentUser ? <Page /> : <Authentication />
        }
      />
      {currentUser ? (
        <Route path="/*" element={<Page />} />
      ) : (
        <Route path="/" element={<Authentication />} />
      )}
    </Routes> 
  );
}

export default App;
