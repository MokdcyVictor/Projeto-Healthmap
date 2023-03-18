import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBc7obDj5TlojqyiYQLmNMfsjiC6fEZZR8",
  authDomain: "projeto-healthmap.firebaseapp.com",
  projectId: "projeto-healthmap",
  storageBucket: "projeto-healthmap.appspot.com",
  messagingSenderId: "478984670151",
  appId: "1:478984670151:web:42b99a71d622432a8967e2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase};