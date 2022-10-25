import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBjjqTay2LPcONewHfvNamVckPqQdKSsIo",
    authDomain: "cooking-app-2f359.firebaseapp.com",
    projectId: "cooking-app-2f359",
    storageBucket: "cooking-app-2f359.appspot.com",
    messagingSenderId: "903070578530",
    appId: "1:903070578530:web:e655089fe8dac43a29de3b"
  };



firebase.initializeApp(firebaseConfig)

const projectfirestore=firebase.firestore()

export {projectfirestore}