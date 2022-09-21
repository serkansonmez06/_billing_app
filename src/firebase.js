import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfTAzQSaLNIv7M5Z_CYfaIezgu_D_ZJF0",
  authDomain: "billingapp-b376e.firebaseapp.com",
  projectId: "billingapp-b376e",
  storageBucket: "billingapp-b376e.appspot.com",
  messagingSenderId: "1013288029455",
  appId: "1:1013288029455:web:53ec76923ea3c9acf8427a",
  measurementId: "G-YZ0Y2SMN77",
};
const firebaseApp = firebase.initializeApp(firebaseConfig); // firebase takes config object
const db = firebaseApp.firestore(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
export default { db };
