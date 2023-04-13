import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';

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

// Iniciar authentication com Google
const provider = new GoogleAuthProvider();

// Iniciar firestore
const data = getFirestore(app);

export const signUp = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password, name);
};

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const mewPost = async (post, date, username, id) => addDoc(collection(data, 'posts'), {
  username,
  date,
  post,
  id,
  likes: 0,
  likesUsers: [],
});
