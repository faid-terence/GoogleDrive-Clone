/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { database } from "@/firebaseConfig";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { useFetchSession } from "./useSession";
const files = collection(database, "files");
export const fetchFiles = (parentId: string, userEmail: string| undefined | null) => {
  const [fileList, setFileList] = useState<ArrayType>([{}]);
  // const { session } = useFetchSession();
  // userEmail : session?.user.email;
  const emailQuery = query(files, where("userEmail", "==", userEmail));
  const getFolders = () => {
    if (userEmail) {
      if (!parentId) {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ""),
          );
        });
      } else {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };
  useEffect(() => {
    getFolders();
  }, [parentId, userEmail]);

  return { fileList };
};
