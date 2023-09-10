import React from "react";
import styles from "./progress.module.scss";
const Progress = ({ progress }: Progress) => {
  return (
    <div className={styles.progressMain}>
      <progress
        className="progress progress-success w-56"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default Progress;
