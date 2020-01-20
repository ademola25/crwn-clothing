import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDzV1F_bYJeHfB1os1xBfocHQBShGo7Atw",
        authDomain: "crwn-db-45f1e.firebaseapp.com",
        databaseURL: "https://crwn-db-45f1e.firebaseio.com",
        projectId: "crwn-db-45f1e",
        storageBucket: "crwn-db-45f1e.appspot.com",
        messagingSenderId: "165230246628",
        appId: "1:165230246628:web:d66a4905ffd1e377fa0af1",
        measurementId: "G-DKYMSJW2KS"
      
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  
