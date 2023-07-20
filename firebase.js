import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC_Th61sHOoOgU3D0B_LRl4G03jqRUaFJo",
  authDomain: "healthmap-app.firebaseapp.com",
  projectId: "healthmap-app",
  storageBucket: "healthmap-app.appspot.com",
  messagingSenderId: "621653444967",
  appId: "1:621653444967:web:3feaf41ec66f3800b8c7c2",
  measurementId: "G-MM53J0DVL2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase};