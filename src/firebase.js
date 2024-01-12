import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

//import firebase from 'firebase/app';
//import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAa6Kiu4ItUQknJ7fn9dDLhtQO9ItUgMtQ",
  authDomain: "fir-form02.firebaseapp.com",
  projectId: "fir-form02",
  storageBucket: "fir-form02.appspot.com",
  messagingSenderId: "165278058482",
  appId: "1:165278058482:web:28f0f301b78c296af80d6b",
  measurementId: "G-VDY8RJZ9CY"
};

//firebase.initializeApp(firebaseConfig);
//const storage = firebase.storage();
//export {firebase };

 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const storage = getStorage(app);