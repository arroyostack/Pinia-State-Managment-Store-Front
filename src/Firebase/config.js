import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyDPIAfAMcRgKOdM9VbxUVRNW_p92Xx3D1A",

    authDomain: "v-shop-c8306.firebaseapp.com",

    projectId: "v-shop-c8306",

    storageBucket: "v-shop-c8306.appspot.com",

    messagingSenderId: "614718966242",

    appId: "1:614718966242:web:ddc55d29a927a2f227d1bb"

};

//initialization
firebase.initializeApp(firebaseConfig)

//   initialize firestore ServiceWorker
const projectFirestore = firebase.firestore()

export {
    projectFirestore
}