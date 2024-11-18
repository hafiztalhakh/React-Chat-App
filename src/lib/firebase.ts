import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDxNFifh2OY2E6nqiljeKbEEkmR2N1HFOk',
  authDomain: 'reactchat-ba5ca.firebaseapp.com',
  projectId: 'reactchat-ba5ca',
  storageBucket: 'reactchat-ba5ca.appspot.com',
  messagingSenderId: '233229717607',
  appId: '1:233229717607:web:df8c18717e75af2c5d44c2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
