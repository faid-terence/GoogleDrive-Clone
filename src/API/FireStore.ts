import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const files = collection(database, "files");
export const addFiles = (imageLink: string, imageName: string) => {
  try {
    void addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payload: {
  folderName: string;
  isFolder: boolean;
  fileList: object;
}) => {
  try {
    void addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList
    });
  } catch (error) {
    console.log(error);
  }
};
