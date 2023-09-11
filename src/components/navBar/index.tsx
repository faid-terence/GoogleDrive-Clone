/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "@/components/common/Button/button";
import { signIn, signOut } from "next-auth/react";
import styles from "../TopBar/topBar.module.scss";
export default function NavBar() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
    <div className="navbar bg-base-100">
      {session ? (
        <>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl normal-case">{session.user.name}</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
                <div className="w-10 rounded-full">
                  <img src={session.user.image}className={styles.profileImg} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
              >
                {/* <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li> */}
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
    </div>
  );
}
