// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKY8_b1F9twkY2wjdp3LtvhjdDC_DXp8c",
  authDomain: "assinment9-9ddb6.firebaseapp.com",
  projectId: "assinment9-9ddb6",
  storageBucket: "assinment9-9ddb6.appspot.com",
  messagingSenderId: "39458028698",
  appId: "1:39458028698:web:8faa026fe2f1f80652b323",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export default app;
