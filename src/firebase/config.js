import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe_YxLkc1Z0RKBwFOzIxrDPptIffRluUs",
    authDomain: "olxs-929e7.firebaseapp.com",
    projectId: "olxs-929e7",
    storageBucket: "olxs-929e7.appspot.com",
    messagingSenderId: "618469760592",
    appId: "1:618469760592:web:2ec41e6400e5a9df433b55",
    measurementId: "G-3GKY0MTLTR"
  };

 export default  firebase.initializeApp(firebaseConfig)