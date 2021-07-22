import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjWRicnMlcnD7F4-T2Pv9mTDzXtt89Lvg",
  authDomain: "slack-clone-ab2ab.firebaseapp.com",
  projectId: "slack-clone-ab2ab",
  storageBucket: "slack-clone-ab2ab.appspot.com",
  messagingSenderId: "285444965778",
  appId: "1:285444965778:web:87f93e00181d4e8893ad4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
