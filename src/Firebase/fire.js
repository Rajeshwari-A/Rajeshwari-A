import firebase  from 'firebase/app';
import 'firebase/auth';
// import './'
console.log("process.env", process.env)

const fire = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
})

export const auth = firebase.auth();
export default fire;
