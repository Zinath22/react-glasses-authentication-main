// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzao-TuLeBwcE5CyvhGFRBjBFbo-yu_8M",
  authDomain: "sunglass-shop-react.firebaseapp.com",
  projectId: "sunglass-shop-react",
  storageBucket: "sunglass-shop-react.appspot.com",
  messagingSenderId: "311308218574",
  appId: "1:311308218574:web:7340c413a7b1f9af7ba09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;