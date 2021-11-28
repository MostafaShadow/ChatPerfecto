import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDJ8I6oBvbUN4XFZ8XoCJHB_CIrTqFy3ho",
  authDomain: "chatall-75baf.firebaseapp.com",
  projectId: "chatall-75baf",
  storageBucket: "chatall-75baf.appspot.com",
  messagingSenderId: "1068657201471",
  appId: "1:1068657201471:web:f19867ae9a589fba77838a",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
