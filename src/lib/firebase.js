import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9zQRQVHU-80kQMHerFIFeqTHGJF9hh-4',
  authDomain: 'social-network-add74.firebaseapp.com',
  projectId: 'social-network-add74',
  storageBucket: 'social-network-add74.appspot.com',
  messagingSenderId: '719636868928',
  appId: '1:719636868928:web:4a11b7d9d296e026dc14a5',
  measurementId: 'G-JGSFJ1X4BN',
};

// Iniciar firebase
const app = initializeApp(firebaseConfig);
// Iniciar authentication
const auth = getAuth(app);

export const signUp = (email, password, name, surname, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, { name, surname, username });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return [errorCode, errorMessage];
    });
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return [errorCode, errorMessage];
    });
};
