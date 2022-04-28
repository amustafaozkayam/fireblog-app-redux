import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyB-KYRyd9nDpzjySdw0fX_RskWiCI67Ij8",
  authDomain: "redux-blog-app-ba44f.firebaseapp.com",
  projectId: "redux-blog-app-ba44f",
  storageBucket: "redux-blog-app-ba44f.appspot.com",
  messagingSenderId: "1017948119812",
  appId: "1:1017948119812:web:c6ecaadf8cd6be7e312651",
  measurementId: "G-79HHMTPJ36"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(firebaseApp);

