import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzlPK64z592XZP-HGrMqmf87kETIUXWVY',
  authDomain: 'tmb-telkom.firebaseapp.com',
  projectId: 'tmb-telkom',
  storageBucket: 'tmb-telkom.appspot.com',
  messagingSenderId: '69494978596',
  appId: '1:69494978596:web:85407e3e0172fef73bc0b1',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  propmt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getMaskData = async () => {
  const collectionRef = collection(db, 'mask-detection');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data());
};

export const getAccount = async () => {
  const collectionRef = collection(db, 'users');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => [doc.id, doc.data()]);
};

export const getBusInformation = async () => {
  const collectionRef = collection(db, 'buses');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => [doc.id, doc.data()]);
};

export const getBusData = async docid => {
  const collectionRef = collection(db, 'buses', docid, 'data');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data());
};

export const getFeedback = async () => {
  const collectionRef = collection(db, 'feedback');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data());
};

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

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user.', error.message);
    }
  }

  return userDocRef;
};

export const createUserFeedback = async (user, star, feedback) => {
  if (!user) return;

  const feedbackDocRef = doc(db, 'feedback', user.uid);

  const { displayName } = user;

  try {
    await setDoc(feedbackDocRef, {
      displayName,
      star,
      feedback,
    });
  } catch (error) {
    console.log('error creating the feedback.', error.message);
  }
};

export const createMaskNoMaskData = async (date, mask, nomask, id) => {
  const healthcareDocRef = doc(db, 'buses', 'GTUoz3TEEqT09e8kMHls', 'data', id);
  const healthcareSnapshot = await getDoc(healthcareDocRef);

  if (!healthcareSnapshot.exists()) {
    try {
      await setDoc(healthcareDocRef, {
        date,
        mask,
        nomask,
      });
    } catch (error) {
      console.log('error creating the feedback.', error.message);
    }
  } 
  
  await updateDoc(healthcareDocRef, {
    mask,
    nomask,
  }).then(function() {
    console.log("Mask updated");
  })

  return healthcareDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
