import { initializeApp } from "firebase/app";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC6t-OzcNqk-I1WfCZRjQ8AICJkW-NsW_w",
    authDomain: "login-test-e8d4f.firebaseapp.com",
    projectId: "login-test-e8d4f",
    storageBucket: "login-test-e8d4f.appspot.com",
    messagingSenderId: "317141163617",
    appId: "1:317141163617:web:9b668ccc065ef24ba5d420"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const database = firebase.firestore()
  export default database