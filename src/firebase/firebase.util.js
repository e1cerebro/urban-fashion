import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBR0OqwIMjJW4pXMCRU1ONoxovPQrmMRzA',
  authDomain: 'urban-fashion-cec42.firebaseapp.com',
  databaseURL: 'https://urban-fashion-cec42.firebaseio.com',
  projectId: 'urban-fashion-cec42',
  storageBucket: 'urban-fashion-cec42.appspot.com',
  messagingSenderId: '570582777024',
  appId: '1:570582777024:web:7c4aa3cd31fe7106a10125',
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
