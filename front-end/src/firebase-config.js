import { ExpansionPanel } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";

// initializare credentiale pentru firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyD3rr-k9hk5eyl0fXQ_IV-PuZGHjylOQwI",
    authDomain: "tw-project-75c12.firebaseapp.com",
    projectId: "tw-project-75c12",
    storageBucket: "tw-project-75c12.appspot.com",
    messagingSenderId: "111652467035",
    appId: "1:111652467035:web:b1884d66cbf2b54e70aa7e",
    measurementId: "G-YTV5JXXWF8"
  })

  export const auth = app.auth();
  export default app;