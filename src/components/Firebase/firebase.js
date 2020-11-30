import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDrKWmw1O8nwROwbmYoUEOJyZoUACH_HqM",
  authDomain: "dashboard-8447b.firebaseapp.com",
  databaseURL: "https://dashboard-8447b.firebaseio.com",
  projectId: "dashboard-8447b",
  storageBucket: "dashboard-8447b.appspot.com",
  messagingSenderId: "322823990268",
  appId: "1:322823990268:web:fca428b808ffeeb63e6079",
  measurementId: "G-0L4HFFHZES",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}

export default Firebase;

