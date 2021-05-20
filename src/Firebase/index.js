import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDelg6z1q-PTp8vyODOOKNXoCXGcmY81G4",
  authDomain: "auth-839f1.firebaseapp.com",
  projectId: "auth-839f1",
  storageBucket: "auth-839f1.appspot.com",
  messagingSenderId: "120190975963",
  appId: "1:120190975963:web:4eb97b81289e5eb76371fe",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
