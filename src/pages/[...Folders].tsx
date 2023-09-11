import React from "react";
import { useRouter } from "next/router";
import { UploadFiles } from "@/components/Upload";
import { ShowFiles } from "@/components/ShowFiles";
import { useFetchSession } from "@/hooks/useSession";
export default function Folder() {
  const router = useRouter();
  const { session } = useFetchSession();

  const parentId = router?.query?.id;
  return (
    <div>
      {session ? 
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
       : (
        <></>
      )}
    </div>
  );
}
