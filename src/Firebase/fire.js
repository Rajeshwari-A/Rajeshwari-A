// import firebase from 'firebase';

//   var firebaseConfig = {
//     apiKey: "AIzaSyCuUlFlNKhAG2gcMZjmUAlVmrNYOkTAnrk",
//     // authDomain: "bridge-fund-qa.firebaseapp.com",
//     // projectId: "bridge-fund-qa",
//     // storageBucket: "bridge-fund-qa.appspot.com",
//     // messagingSenderId: "420858885597",
//     // appId: "1:420858885597:web:c1c50846fcebf78b587234",
//     // measurementId: "G-F0FT4GT4QW"
//   };
//   // Initialize Firebase
//   const fire = firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();
// export default fire;


import app from 'firebase/app';
import FirebaseContext from './context';
import "firebase/auth";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
    // doSignInWithEmailAndPassword = async(email, password) =>  await this.auth.signInWithEmailAndPassword(email, password);
    // doCreateUserWithEmailAndPassword= async(email, password) =>  await this.auth.createUserWithEmailAndPassword(email, password);
}
export default Firebase;
export { FirebaseContext };
