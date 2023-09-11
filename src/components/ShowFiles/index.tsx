/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./showFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
// import { BsFiles } from "react-icons/bs";
import { HiMiniFolderOpen } from "react-icons/hi2";
import { useRouter } from "next/router";
import { useFetchSession } from "@/hooks/useSession";
import TopBarComponent from "../TopBar";
export const ShowFiles = ({ parentId }: FolderStructure) => {
  const { session } = useFetchSession();
  const { fileList } = fetchFiles(parentId, session?.user.email);
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  const router = useRouter();

  return (
    <div className={styles.fileGrid}>
      <TopBarComponent />
      {fileList.map(
        (file: {
          imageLink: "";
          imageName: "";
          isFolder: boolean;
          folderName: "";
          id: "";
        }) => {
          return (
            <div key={file.id}>
              {file.isFolder ? (
                <div
                  onClick={() => router.push(`/folder?id=${file.id}`)}
                  className={styles.files}
                >
                  <HiMiniFolderOpen size={40} />
                  <p>{file.folderName}</p>
                </div>
              ) : (
                <div
                  onClick={() => openFile(file.imageLink)}
                  className={styles.files}
                >
                  {/* <BsFiles size={40} /> */}
                  <img className={styles.imageLink} src={file.imageLink} />
                  <p>{file.imageName}</p>
                </div>
              )}

              {/* <img className={styles.imageLink} src={file.imageLink} /> */}
            </div>
          );
        },
      )}
    </div>
  );
};
