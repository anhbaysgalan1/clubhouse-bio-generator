import firebase from 'firebase';
// import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCblnoaH41fHz653odMJ_0-x-fb-v3zhvg",
  authDomain: "clubhouse-mongolia.firebaseapp.com",
  projectId: "clubhouse-mongolia",
  storageBucket: "clubhouse-mongolia.appspot.com",
  messagingSenderId: "612559024645",
  appId: "1:612559024645:web:6bda99eb265c43831e226c",
  measurementId: "G-X4W413KLM3"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Серверийн алдаа', err.stack)}
  }
  const fire = firebase;
  export default fire.firestore();