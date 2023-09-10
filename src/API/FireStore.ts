import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");
export const addFiles = (imageLink: string) => {
  try {
    void addDoc(files, {
      imageLink: imageLink,
    });
  } catch (error) {
    console.log(error)
  }
};
