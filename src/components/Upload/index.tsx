import React, { useState } from "react";
import styles from "./Upload.module.scss";
import Button from "@/components/common/Button/button";
import { fileUpload } from "@/API/FileUpload";
import Progress from "../common/Progress";
import { addFolder } from "@/API/FireStore";
import { useFetchSession } from "@/hooks/useSession";
export const UploadFiles = ({ parentId }: FolderStructure) => {
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState<string | undefined>();
  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const userEmail = session?.user.email;
    fileUpload(file, setProgress, parentId, userEmail!);
  };
  
  const { session } = useFetchSession();
  const uploadFolder = () => {
    if (typeof folderName !== 'string') {
      console.log("Terence")
      return;
    }
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email,
    };
    addFolder(payload);
    setFolderName("");
  };
  // const handleAddFolder = () => {
  //   // After adding the folder, hide the input field
  //   setFolderVisible(false);
  // };

  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setFileVisible(!isFileVisible)}
        title="+ File"
        btnClass="btn btn-outline"
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
        btnClass="btn btn-outline"
      />
      {isFolderVisible ? (
        <><input
          onChange={(event) => setFolderName(event.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={folderName} /><Button
            onClick={() => uploadFolder()}
            title="Create"
            btnClass="btn" /></>
      ) : (
        <></>
      )}
     
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <Progress progress={progress} />
      )}
    </div>
  );
};
