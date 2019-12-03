import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNJpNbCarpxrMAyhv0XdZTdlDfnfDUemM",
  authDomain: "crwn-clothing-f350b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-f350b.firebaseio.com",
  projectId: "crwn-clothing-f350b",
  storageBucket: "crwn-clothing-f350b.appspot.com",
  messagingSenderId: "309856388144",
  appId: "1:309856388144:web:61f0ba33a96fe1c4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
