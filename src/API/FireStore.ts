import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");
export const addFiles = (imageLink: string, imageName: string) => {
  try {
    void addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
    });
  } catch (error) {
    console.log(error);
  }
};
