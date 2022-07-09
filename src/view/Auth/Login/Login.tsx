/*
 * Author: zhangyuxuan
 * Date: 2022-06-05 18:31:38
 * LastEditTime: 2022-06-28 18:11:34
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\view\Auth\Login\Login.tsx
 */

import React from "react";

import { AuthContext } from "../Auth";

import LoginFrom from  'components/LoginFrom/LoginFrom';
import QR from "components/QRBox";

import Styles from "./Login.module.scss";
import { useOutletContext } from "react-router-dom";

export default function LoginPage() {
  const [AuthState, setAuthState] = useOutletContext<AuthContext>();

  return (
    <div className={Styles.wraper}>
      <LoginFrom />
      <div></div>
      <QR />
    </div>
  );
}
