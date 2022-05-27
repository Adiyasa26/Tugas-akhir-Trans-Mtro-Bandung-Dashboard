import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzlPK64z592XZP-HGrMqmf87kETIUXWVY",
  authDomain: "tmb-telkom.firebaseapp.com",
  projectId: "tmb-telkom",
  storageBucket: "tmb-telkom.appspot.com",
  messagingSenderId: "69494978596",
  appId: "1:69494978596:web:85407e3e0172fef73bc0b1"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  propmt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const role = "user"

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        role,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user.', error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return signInWithEmailAndPassword(auth, email, password);
  };