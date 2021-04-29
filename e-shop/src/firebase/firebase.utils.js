import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9CneBw74qPHOVfofiAl-y9pblBSxSJAs",
    authDomain: "eshop-db-cd6cc.firebaseapp.com",
    projectId: "eshop-db-cd6cc",
    storageBucket: "eshop-db-cd6cc.appspot.com",
    messagingSenderId: "257993644309",
    appId: "1:257993644309:web:82f699a59f5fb89446311c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return 

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log("snapShot", snapShot);

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
} 

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;