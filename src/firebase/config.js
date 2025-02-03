import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCntbek2Kkr6p3emYe-H2kDqDkjlQWBb2s",
  authDomain: "thedojosite-52b00.firebaseapp.com",
  projectId: "thedojosite-52b00",
  storageBucket: "thedojosite-52b00.appspot.com",
  messagingSenderId: "846241094010",
  appId: "1:846241094010:web:12584eb9bdab6c79a55ec3",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
