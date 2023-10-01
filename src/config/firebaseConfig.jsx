import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const all = import.meta.env;



const firebaseConfig = {
apiKey: "AIzaSyAzao-TuLeBwcE5CyvhGFRBjBFbo-yu_8M",
  authDomain: "sunglass-shop-react.firebaseapp.com",
  projectId: "sunglass-shop-react",
  storageBucket: "sunglass-shop-react.appspot.com",
  messagingSenderId: "311308218574",
  appId: "1:311308218574:web:7340c413a7b1f9af7ba09f"
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
