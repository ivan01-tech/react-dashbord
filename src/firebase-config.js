import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "admin-dashborb.firebaseapp.com",
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: "admin-dashborb.appspot.com",
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_AP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseStorage = getStorage(app)
export const fireStore = getFirestore(app)


export default app