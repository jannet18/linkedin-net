import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAGvUtgVX6xeIKWGJLyP7hVd9Ep9ivQVmk",
  authDomain: "linkedin-net.firebaseapp.com",
  projectId: "linkedin-net",
  storageBucket: "linkedin-net.appspot.com",
  messagingSenderId: "124053877792",
  appId: "1:124053877792:web:a8790bf38c4c879572f845"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider(app);

export { app, db, auth, provider, storage };