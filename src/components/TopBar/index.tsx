/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "@/components/common/Button/button";
import { signIn, signOut } from "next-auth/react";
import styles from "./topBar.module.scss";
export default function TopBarComponent() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img
          onClick={() => signOut()}
          className={styles.profileImg}
          src={session.user?.image ?? '/default-image.jpg'}
        />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn btn-outline btn-success"
          title="Sign Up!"
        />
      )}
    </div>
  );
}
