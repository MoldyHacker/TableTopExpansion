import { boot } from 'quasar/wrappers'
//
// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
// import {useAuthStore} from "stores/auth-store";
// import AuthUser from "src/models/AuthUser";

const firebaseConfig = {
  apiKey: "AIzaSyDUAEScC0oiXdln9pk5G4ehB4GOUql1eTg",
  authDomain: "tabletop-expansion.firebaseapp.com",
  projectId: "tabletop-expansion",
  storageBucket: "tabletop-expansion.appspot.com",
  messagingSenderId: "818162262556",
  appId: "1:818162262556:web:7457985b07f6f9fb04f5d9",
  measurementId: "G-0LQV2XLX15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// in case I want to use Pinia persistent
// const authStore = useAuthStore();
// firebase.auth().onAuthStateChanged(user => {
//   authStore.setUser(user ? new AuthUser(user) : null);
//   console.log('logged in as: ', authStore.authUser)
// });

export {db, auth, storage, analytics}
