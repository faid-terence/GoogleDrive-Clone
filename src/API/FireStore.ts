import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");
export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
) => {
  try {
    void addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payload: {
  folderName: string;
  isFolder: boolean;
  fileList: object;
  parentId: string;
}) => {
  try {
    void addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId,
    });
  } catch (error) {
    console.log(error);
  }
};
