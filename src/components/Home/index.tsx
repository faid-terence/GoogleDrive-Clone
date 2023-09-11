/* eslint-disable @typescript-eslint/no-misused-promises */

import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import TopBarComponent from "../TopBar";
import { UploadFiles } from "../Upload";
import { ShowFiles } from "../ShowFiles";
export default function HomeComponent() {
  const { session } = useFetchSession();

  return (
    <div>
      <TopBarComponent />
      {session ? (
        <>
          <UploadFiles parentId="" />
          <ShowFiles parentId="" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
