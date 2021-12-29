import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBbgRZ83SsH2ksimQ7lMpwUviR0U2lMtPM",
    authDomain: "mockrestraunt.firebaseapp.com",
    databaseURL: "https://mockrestraunt-default-rtdb.firebaseio.com",
    projectId: "mockrestraunt",
    storageBucket: "mockrestraunt.appspot.com",
    messagingSenderId: "767680958368",
    appId: "1:767680958368:web:89b28a8962aaa2780d9ec5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Get Database Method
  const database = getDatabase(app);

  


  export { database }; 