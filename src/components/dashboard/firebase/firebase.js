import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmY0XDcICoTtJwWl2Dy3e8o7iYK8ovv0Q",
    authDomain: "viral-clicks.firebaseapp.com",
    projectId: "viral-clicks",
    storageBucket: "viral-clicks.appspot.com",
    messagingSenderId: "550093305856",
    appId: "1:550093305856:web:6d28b5138b0d4394cdc0e5"
};
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);
 const auth=getAuth(app);

 export {db,auth}
