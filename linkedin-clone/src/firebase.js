import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3KMbi4TCdjfwGxtTQpzAARjHRYdocGsQ",
    authDomain: "linkedin-clone-a9b68.firebaseapp.com",
    projectId: "linkedin-clone-a9b68",
    storageBucket: "linkedin-clone-a9b68.appspot.com",
    messagingSenderId: "954302578089",
    appId: "1:954302578089:web:7210d4dfc6cbcd42fb98b8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

/*The above line of codes connects to our database*/

const db = firebaseApp.firestore(); //Getting the db
const auth = firebase.auth(); //Getting the authentication - We'll going to have log in support

export {db, auth}; //Exporting the db and auth so that we can use it in other files