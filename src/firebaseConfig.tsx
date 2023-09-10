import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyD40Wwkfy3UHvpr_xr7uAQeDRZeYLD36KE",
//   authDomain: "drive-clone-96e03.firebaseapp.com",
//   projectId: "drive-clone-96e03",
//   storageBucket: "drive-clone-96e03.appspot.com",
//   messagingSenderId: "210204176837",
//   appId: "1:210204176837:web:37b5d326e0c554d7d31bac",
//   measurementId: "G-HFT6W7JGHH",
// };

// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCU7VrUWqdyURTfH9vMQnskosu5qZE3hY",
  authDomain: "drive-c1c49.firebaseapp.com",
  projectId: "drive-c1c49",
  storageBucket: "drive-c1c49.appspot.com",
  messagingSenderId: "794440366716",
  appId: "1:794440366716:web:d8afb927ef752f5aaba7f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const database = getFirestore(app);
