// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD25DsyfLJwGX6nuurxawB_CCLrI2AwH_A",
  authDomain: "teachly-61c78.firebaseapp.com",
  projectId: "teachly-61c78",
  storageBucket: "teachly-61c78.appspot.com",
  messagingSenderId: "204772914388",
  appId: "1:204772914388:android:c23edd4bc22eb3620ab741",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
