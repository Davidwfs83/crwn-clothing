import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBZmbN6AEjCQv3ZI36BAQzdzmEqhopQhNI",
  authDomain: "crwn-db-60e80.firebaseapp.com",
  projectId: "crwn-db-60e80",
  storageBucket: "crwn-db-60e80.appspot.com",
  messagingSenderId: "707672329969",
  appId: "1:707672329969:web:39f779894a3cefa1ce6350",
  measurementId: "G-B9LCH4QP2Z"
}

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      })
    }catch(error)
    {
      console.log('error creating user', error.message);
    }
    
  }
  return userRef;

}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = (event) => {
  
  return auth.signInWithPopup(provider);
};

export default firebase;

