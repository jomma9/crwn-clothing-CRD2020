import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2v-oxpdV-HZqdgTj0YQLDSxUKm0lPyWQ",
  authDomain: "crwn-db-project-56fe7.firebaseapp.com",
  databaseURL: "https://crwn-db-project-56fe7.firebaseio.com",
  projectId: "crwn-db-project-56fe7",
  storageBucket: "crwn-db-project-56fe7.appspot.com",
  messagingSenderId: "90607123100",
  appId: "1:90607123100:web:5215c991a6f3d66a078b59",
  measurementId: "G-029FQX120L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
