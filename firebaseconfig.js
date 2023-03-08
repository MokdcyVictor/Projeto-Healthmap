import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC6t-OzcNqk-I1WfCZRjQ8AICJkW-NsW_w",
    authDomain: "login-test-e8d4f.firebaseapp.com",
    projectId: "login-test-e8d4f",
    storageBucket: "login-test-e8d4f.appspot.com",
    messagingSenderId: "317141163617",
    appId: "1:317141163617:web:9b668ccc065ef24ba5d420"
  };
  
  // Initialize Firebase
  let app
  if (firebase.apps.leght === 0) {
    app = firebase.initializeApp(firebaseConfig)
  }
  else{
    app = firebase.app()
  }

  const auth = firebase.auth()

  export{auth}