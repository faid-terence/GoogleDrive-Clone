import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const files = collection(database, "files");
export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
) => {
  try {
    void addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
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
  userEmail: string;
}) => {
  try {
    void addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId,
      userEmail: payload.userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};
