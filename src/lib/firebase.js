import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
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
export const auth = getAuth(app);

// Iniciar authentication com Google
const provider = new GoogleAuthProvider();

// Iniciar firestore
const db = getFirestore(app);

// eslint-disable-next-line max-len
export const signUp = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password, name);

  return updateProfile(auth.currentUser, {
    displayName: name,
  });
};

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const newPost = async (textPost) => {
  const post = {
    userId: auth.currentUser.uid,
    username: auth.currentUser.displayName,
    date: new Date(Date.now()),
    post: textPost,
    likes: [],
  };

  const docRef = await addDoc(collection(db, 'posts'), post);
  post.id = docRef.id;

  return post;
};

export const accessPost = async (exibirPost, clearPost) => {
  const queryOrder = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(queryOrder, (querySnapshot) => {
    clearPost();
    querySnapshot.forEach((item) => {
      const data = item.data();
      data.id = item.id;
      data.date = data.date.toDate().toLocaleDateString();
      exibirPost(data);
    });
  });
};

export const editPost = async (postId, textArea) => {console.log(db) 
  return updateDoc(doc(db, 'posts', postId), {
  post: textArea,
});
}

export const deletePost = async (postId) => deleteDoc(doc(db, 'posts', postId));

export const likePost = async (postId, userId) => updateDoc(doc(db, 'posts', postId), {
  likes: arrayUnion(userId),
});

export const dislikePost = async (postId, userId) => updateDoc(doc(db, 'posts', postId), {
  likes: arrayRemove(userId),
});
