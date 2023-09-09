
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD40Wwkfy3UHvpr_xr7uAQeDRZeYLD36KE",
  authDomain: "drive-clone-96e03.firebaseapp.com",
  projectId: "drive-clone-96e03",
  storageBucket: "drive-clone-96e03.appspot.com",
  messagingSenderId: "210204176837",
  appId: "1:210204176837:web:37b5d326e0c554d7d31bac",
  measurementId: "G-HFT6W7JGHH"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const storage  = getStorage(app);
export const database = getFirestore(app);