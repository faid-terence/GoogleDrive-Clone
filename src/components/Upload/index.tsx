import React from "react";
import styles from "./Upload.module.scss";
import Button from "@/components/common/Button/button";
export const UploadFiles = () => {
  return (
    <div className={styles.uploadMain}>
      <Button title="+ New" btnClass="btn-primary" />
      <Button title="Create a Folder" btnClass="btn-info" />
    </div>
  );
};
