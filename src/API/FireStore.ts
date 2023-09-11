/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { database } from "@/firebaseConfig";
import { collection, addDoc, deleteDoc } from "firebase/firestore";

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
  userEmail: string | undefined | null;
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


// export const deleteFile = async (fileId: string): Promise<void> => {
//   try {
//     // Use your file storage library's deleteDoc function to delete the file
//     await deleteDoc(fileId);
//     console.log(`File with ID ${fileId} deleted successfully.`);
//   } catch (error) {
//     console.error(`Error deleting file with ID ${fileId}: ${error}`);
//     throw error; // You can choose to handle the error as per your application's needs.
//   }
// };