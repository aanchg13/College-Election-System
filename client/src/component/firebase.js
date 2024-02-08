import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAccl3Yr2tnWwt7Io2d4q7bem2f-YmLwHU",
  
    authDomain: "phone-auth-873c7.firebaseapp.com",
  
    projectId: "phone-auth-873c7",
  
    storageBucket: "phone-auth-873c7.appspot.com",
  
    messagingSenderId: "587360642914",
  
    appId: "1:587360642914:web:191fcf9629e1cb66f46e3b"
  
};
  
firebase.initializeApp(firebaseConfig);
  
export default firebase;