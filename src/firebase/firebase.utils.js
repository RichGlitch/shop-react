import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCSJVPQIH8vZmrimMdZZXw55C1nr9Fh7WI",
    authDomain: "shop-proyect.firebaseapp.com",
    databaseURL: "https://shop-proyect.firebaseio.com",
    projectId: "shop-proyect",
    storageBucket: "shop-proyect.appspot.com",
    messagingSenderId: "198553827340",
    appId: "1:198553827340:web:074885ce32638f4cfb5629",
    measurementId: "G-ZM1QMB9S0W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });;
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;