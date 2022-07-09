/*
 * Author: zhangyuxuan
 * Date: 2022-06-05 18:31:38
 * LastEditTime: 2022-06-28 17:37:14
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\view\Auth\Auth.tsx
 */

import React, { useContext, createContext, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Logining from "components/Logining/Logining";

import Style from "./Auth.module.scss";

export type AuthState = "login" | "logining" | "logout" | null;

export type AuthContext = [
  AuthState,
  React.Dispatch<React.SetStateAction<AuthState>>
];

export default function Auth() {
  const useShowComponent =  () => {
    const [authState, setAuthState] = useState<AuthState>("logout");
    switch (authState) {
      case "logining":
        return <Logining />;
      default:
        return <Outlet context={[authState, setAuthState]} />;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="background"
        style={{
          zIndex: -1,
          backgroundColor: "red",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className={Style["auth-box"]}>{useShowComponent()}</div>
    </div>
  );
}

export function useUser() {
  return useOutletContext<AuthContext>();
}
