import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("BZ3nAjdfk5ovLEJiriQm")
  .collection("cartItems")
  .doc("RtiiOPahSAvKnqJuU1HQ");

firestore.doc("/users/id/cartItems/id");
firestore.collection("/users");
