import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAyHvybPSAvUV_QuGFtaVW7YxER3WxgAjE",
    authDomain: "olx-demo-2cb10.firebaseapp.com",
    projectId: "olx-demo-2cb10",
    storageBucket: "olx-demo-2cb10.appspot.com",
    messagingSenderId: "107313476075",
    appId: "1:107313476075:web:c7e84f09a94d3f487569ae",
    measurementId: "G-D8T3JP1PPD"
  };

  export default firebase.initializeApp(firebaseConfig)