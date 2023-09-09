/* eslint-disable @typescript-eslint/no-misused-promises */

import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "@/components/common/button";
import { signIn, signOut } from "next-auth/react";
import styles from "./topBar.module.scss"
export default function TopBarComponent() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
       <img onClick={()=> signOut()} className={styles.profileImg} src={session?.user.image} />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up!"
        />
        
      )}
    </div>
  );
}
