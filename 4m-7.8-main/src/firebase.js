import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiulkmcH55jV3kATETvOOv2_VRxL8e0qU",
  authDomain: "ecommerce-db499.firebaseapp.com",
  projectId: "ecommerce-db499",
  storageBucket: "ecommerce-db499.appspot.com",
  messagingSenderId: "157639509951",
  appId: "1:157639509951:web:4a2434313d2652e999c30a",
  measurementId: "G-LZ3H92PN79"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, provider, db };
export default app;