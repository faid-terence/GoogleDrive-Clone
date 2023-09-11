/* eslint-disable @typescript-eslint/no-misused-promises */

import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import TopBarComponent from "../TopBar";
import { UploadFiles } from "../Upload";
import { ShowFiles } from "../ShowFiles";
// import NavBar from "../navBar";
import Welcome from "../Welcome";
export default function HomeComponent() {
  const { session } = useFetchSession();

  return (
    <div className="bg-red">
      <TopBarComponent />
      {/* <NavBar/> */}
      {session ? (
        <>
          <UploadFiles parentId="" />
          <ShowFiles parentId="" />
        </>
      ) : (
        <Welcome/>
      )}
    </div>
  );
}
