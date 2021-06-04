import firebase from 'firebase'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCWjPDWRmz-4KrnWjeUTffjHBvVRDroT3k",
    authDomain: "clone-final-version.firebaseapp.com",
    projectId: "clone-final-version",
    storageBucket: "clone-final-version.appspot.com",
    messagingSenderId: "358539026997",
    appId: "1:358539026997:web:7c0698a33c773bf037477c",
    measurementId: "G-L9T4YW9MLY"
});
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, provider };
export default db;