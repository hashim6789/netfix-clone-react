// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
} from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmwVJa3Rbw3lq3q0XdX3HmK809-jr7OHM",
  authDomain: "netflix-clone-bdb4a.firebaseapp.com",
  projectId: "netflix-clone-bdb4a",
  storageBucket: "netflix-clone-bdb4a.firebasestorage.app",
  messagingSenderId: "930846657656",
  appId: "1:930846657656:web:752c54869e6c0c65d3318d",
  measurementId: "G-XQ94ZD6JXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    console.log(name, email, password);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("user registered successfully...");
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("user sign in successfully...");
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const logout = () => {
  signOut(auth);
  toast.success("user sign out successfully...");
};

export { auth, db, login, signup, logout };
