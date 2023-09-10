/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./showFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { BsFiles } from "react-icons/bs";
export const ShowFiles = () => {
  const { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.fileGrid}>
      {fileList.map((file: { imageLink: ""; imageName: "" }) => {
        return (
          <div>
            <div
              onClick={() => openFile(file.imageLink)}
              className={styles.files}
            >
              <BsFiles size={40} />
              <p>{file.imageName}</p>
            </div>

            {/* <img className={styles.imageLink} src={file.imageLink} /> */}
          </div>
        );
      })}
    </div>
  );
};
