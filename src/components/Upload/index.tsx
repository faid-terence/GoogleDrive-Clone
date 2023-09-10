import React, { useState } from "react";
import styles from "./Upload.module.scss";
import Button from "@/components/common/Button/button";
import { fileUpload } from "@/API/FileUpload";
export const UploadFiles = () => {
  const [isFileVisible, setFileVisible] = useState(false);

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    fileUpload(file);
  };
  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setFileVisible(!isFileVisible)}
        title="+ New"
        btnClass="btn-primary"
      />
      {isFileVisible ? (
        <input onChange={(event) => uploadFile(event)} type="file" className="file-input w-full max-w-xs" />
      ) : (
        <></>
      )}

      <Button title="Create a Folder" btnClass="btn-info" />
    </div>
  );
};
