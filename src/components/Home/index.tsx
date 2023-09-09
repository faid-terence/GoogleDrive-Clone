/* eslint-disable @typescript-eslint/no-misused-promises */

import React from "react";

import TopBarComponent from "../TopBar";
import { UploadFiles } from "../Upload";
export default function HomeComponent() {

  return (
    <div>
      <TopBarComponent/>
      <UploadFiles/>
    </div>
  );
}
