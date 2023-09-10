import React, { useState } from "react";
import styles from "./Upload.module.scss";
import Button from "@/components/common/Button/button";
import { fileUpload } from "@/API/FileUpload";
import Progress from "../common/Progress";
import { addFolder } from "@/API/FireStore";
export const UploadFiles = () => {
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState();
  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };
  const uploadFolder = () => {
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
    };
    addFolder(payload);
    setFolderName("");
  };
  const handleAddFolder = () => {
    // After adding the folder, hide the input field
    setFolderVisible(false);
  };

  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setFileVisible(!isFileVisible)}
        title="+ New"
        btnClass="btn-primary"
      />
      {isFileVisible ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}

      <Button
        onClick={() => setFolderVisible(!isFolderVisible)}
        title="Create a Folder"
        btnClass="btn-info"
      />
      {isFolderVisible ? (
        <input
          onChange={(event) => setFolderName(event.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          value={folderName}
        />
      ) : (
        <></>
      )}
      <Button
        onClick={() => uploadFolder()}
        title="Create"
        btnClass="btn-success"
      />
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <Progress progress={progress} />
      )}
    </div>
  );
};
